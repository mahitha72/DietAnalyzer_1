import React from 'react'
import BackgroundVideo from './BackgroundVideo';

import ImageGallery from './ImageGallery';
import Nav from './Nav';
import { motion } from 'framer-motion';
import Footer from './Footer';




function Home() {
  return (
    <div>
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
          <Carosel/>
          <Footer/>
        </div>
      </motion.div>
    </div>
  )
}

export default Home
