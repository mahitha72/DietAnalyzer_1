import React, { useState } from "react";
import { Dropdown } from "flowbite-react"
import Button from "./Button";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

// import Bmi from "./Bmi";
// import Dietician from "./Dietician";

const Nav1 = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "Dietician", link:"/diet" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="md:w-full fixed top-0 left-0 bg-white">
        <div
          className="md:flex items-center justify-between bg-[#yourBodyColor] pb-0 py-3 md:px-9 px-7"
          style={{ height: "10vh" }}
        >
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-Black">
            <img
              src="./Images/logo.jpg" 
              alt="Logo"
              className="w-10 h-12 mr-3" 
            />
            Meal Memory
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-Black"
            ></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-16 absolute md:static bg-[#yourBodyColor] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16" : "top-[-500px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 relative"
              >
                <Link
                  to={link.link}
                  className="text-Black hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="md:ml-8 text-xl md:my-0 my-7 relative">
              {/* Add DropdownButton for "VedaNutri Balance" */}
              <Dropdown label={<span className="text-xl font-semibold">VedaNutri Balance</span>} inline>
                <Dropdown.Item as={Link} to="/Bmi">
                  Macro Breakdown
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/meal">
                  Ayurveda Meal Balance
                </Dropdown.Item>
              </Dropdown>
            </li>
            <Button className="text-Black">
              <Link to="/SignUp">Log Out</Link>
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
