// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCxemfuoAso2MOtYJEICtvY8uUJTv9yNeA",
    authDomain: "myntranotification.firebaseapp.com",
    //databaseURL: "https://myntranotification-default-rtdb.firebaseio.com",
    projectId: "myntranotification",
    storageBucket: "myntranotification.appspot.com",
    messagingSenderId: "631199774571",
    appId: "1:631199774571:web:dcc41b0ac66ee3d513fe2e",
    measurementId: "G-SXPYCWNN5E"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if(permission === "granted"){
        const token = await getToken(messaging, {
            vapidkey: "BLTb0MhfVcjETUxgD6iKnyN-kRXhbSxp-teA9Lgg4PbqBhKxZUA4qC7yDUkzDRgjr6SiGK3qaMUFta-ZoEIoHk0",
        });
        console.log(token);
    }
  
};