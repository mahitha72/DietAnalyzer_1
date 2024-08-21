import React from "react";
import BackgroundVideo from "./BackgroundVideo";

import ImageGallery from "./ImageGallery";
import Nav1 from "./Nav1";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Caroseul from "./Caroseul";
import Quotation from "./Quotation";
import Backdrop from "./Backdrop";
function Home1() {
  return (
    <div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          {/* <Backdrop /> */}
          <Quotation/>
          <BackgroundVideo />
          {/* <Medium/> */}
          <Nav1 />
          {/* <Quotation /> */}
          <ImageGallery />
          <Caroseul />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

export default Home1;
