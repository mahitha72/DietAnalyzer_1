import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import GeneratePie from "./Components/GeneratePie";
// import { messaging } from "./firebase";
// import { getToken } from "firebase/messaging";
// import { useEffect } from "react";

function App() {
//   async function requestPermission() {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       // Generate Token
//       const token = await getToken(messaging, {
//         vapidKey:
//           "BLTb0MhfVcjETUxgD6iKnyN-kRXhbSxp-teA9Lgg4PbqBhKxZUA4qC7yDUkzDRgjr6SiGK3qaMUFta-ZoEIoHk0",
//       });
//       console.log("Token Gen", token);
//       // Send this token  to server ( db)
//     } else if (permission === "denied") {
//       alert("You denied for the notification");
//     }
//   }

//   useEffect(() => {
//     // Req user for notification permission
//     requestPermission();
//   }, []);
const [signIn, toggle] = useState(true);
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp signIn={signIn} toggle={toggle}/>}/>
        <Route path="/createuser"element={<SignUp signIn={!signIn} toggle={toggle}/>}/>
        <Route path="/pie" element={<GeneratePie />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
