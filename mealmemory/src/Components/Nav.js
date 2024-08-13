import React, { useState } from 'react';
import Button from './Button';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
    <div className='md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#yourBodyColor] py-3 md:px-9 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-Black'>
         {/* <img src = "./Images/" ></img>  */}
         <img
              src="./Images/logo.jpg"  // Replace with your image URL
              alt="Logo"
              className="w-10 h-12 mr-3"  // Adjust width and height as needed
            />
         Designer
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'} className="text-Black"></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-16 absolute md:static bg-[#yourBodyColor] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-500px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-Black hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <Button className="text-Black">
          <Link to='/SignUp'>
            Sign In
            </Link>
          </Button>
          
        </ul>
      </div>
      </div>
      {/* <div className='content'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto my-6 lg:my-12">
        <div className="order-2 lg:order-1 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-center lg:text-left mb-4 text-Black">
            Precision Diet Tracking for Better Health
          </h1>
          <h4 className="text-lg lg:text-xl text-center lg:text-left text-grey-200">
            Leverage advanced technology and dietitian expertise <br />
            to achieve your health goals with detailed food tracking,
            <br /> personalized Ayurvedic diet plans, and engaging features that
            keep you motivated and healthy.
          </h4>
        </div>
        <div className="order-1 lg:order-2 lg:flex-1 lg:flex lg:justify-end">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lpOWvtJoRKj60F399onte9uzNmU4ikwm6w&s"
            alt="Diet Tracking"
            className="max-w-[270px] lg:max-w-[300px] opacity-0 animate-fadeIn"
          />
        </div>
      </div>
      </div> */}
    </div>
  );
}

export default Nav;
