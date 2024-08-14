import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import GeneratePie from "./Components/GeneratePie";
// import { messaging } from "./firebase";
// import { getToken } from "firebase/messaging";
// import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import Bmi from "./Components/Bmi";
import Dietician from "./Components/Dietician";
// import Nav1 from "./Components/Nav1";
import Home1 from "./Components/Home1";
import Ayurveda from "./Components/Ayurveda";
import Vata from "./Components/Vata";
import Pitta from "./Components/Pitta";
import Kapha from "./Components/Kapha";
import GeneratePie1 from "./Components/GeneratePie1";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BLTb0MhfVcjETUxgD6iKnyN-kRXhbSxp-teA9Lgg4PbqBhKxZUA4qC7yDUkzDRgjr6SiGK3qaMUFta-ZoEIoHk0",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

//   useEffect(() => {
//     // Req user for notification permission
//     requestPermission();
//   }, []);
const [signIn, toggle] = useState(true);
  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp signIn={signIn} toggle={toggle}/>}/>
        <Route path="/createuser"element={<SignUp signIn={!signIn} toggle={toggle}/>}/>
        <Route path="/home" element={<Home1/>}/>
        <Route path="/food" element={<GeneratePie1/>} />
        <Route path="/Bmi" element={<Bmi/>}/>
        <Route path="/meal" element={<Ayurveda/>}/>
        <Route path="/diet" element={<Dietician/>}/>
        <Route path="/Vata" element={<Vata/>}/>
        <Route path="/Pitta" element={<Pitta/>}/>
        <Route path="/Kapha" element={<Kapha/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
