import "./App.css";
import BackgroundVideo from "./Components/BackgroundVideo";
import ImageGallery from "./Components/ImageGallery";
import Medium from "./Components/Medium";
import Nav from "./Components/Nav";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <BackgroundVideo />
          {/* <Medium/> */}
          <Nav />
          <ImageGallery />
        </div>
      </motion.div>
    </>
  );
}

export default App;
