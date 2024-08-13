const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Schema } = mongoose;
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;
const MongoURI = process.env.MONGO_URI;

// MongoDB Connection
const mongoDB = async () => {
    try {
        await mongoose.connect(MongoURI); // Removed deprecated options
        console.log("MongoDB connected successfully");

        const fetched_data = await mongoose.connection.db.collection("sample").find({}).toArray();
        console.log(fetched_data); // Log or use the fetched data
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

mongoDB();

// Middleware to handle CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Middleware to parse JSON
app.use(express.json());

// User Schema and Model
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Define chart Schema and Model
const chartSchema = new mongoose.Schema({
    name: String,
    totalFat: Number,
    carbs: Number,
    protein: Number,
    email: String,
});
const Chart = mongoose.model('Chart', chartSchema);

// Routes
app.post("/api/createuser", [
    body('email', 'not an email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'password is small').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.post("/api/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "incorrect credentials" })
        }
        const pwdCompare = await bcrypt.compare(password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: "incorrect credentials" })
        }
        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success: true, authToken });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Routes
app.post('/api/charts/save-chart', async (req, res) => {
    const { name, totalFat, carbs, protein, email } = req.body;
  
    try {
      const newChart = new Chart({ name, totalFat, carbs, protein, email });
      const savedChart = await newChart.save();
  
      // Debug line to check what is stored in the database
      console.log('Saved chart:', savedChart);
  
      res.status(201).json({ message: 'Chart saved successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error saving chart', error: err.message });
    }
  });
  
  app.get('/api/charts', async (req, res) => {
      const { email } = req.query; 
    try {
      const charts = await Chart.find({email});
      res.status(200).json(charts);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching charts', error: err.message });
    }
  });

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Start the Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
