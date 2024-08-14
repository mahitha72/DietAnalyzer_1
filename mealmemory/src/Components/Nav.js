import React, { useState } from "react";
import Button from "./Button";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    {
      name: "VedaNutri Balance",
      link: "#",
      dropdown: [
        { name: "Ayurveda Meal Balance", link: "/seo" },
        // { name: "Marketing", link: "/marketing" },
      ],
    },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false); // Add this line

  return (
    <div className="navbar">
      <div className="md:w-full fixed top-0 left-0 bg-white">
        <div
          className="md:flex items-center justify-between bg-[#yourBodyColor] pb-0 py-3 md:px-9 px-7"
          style={{ height: "10vh" }}
        >
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-Black">
            <img
              src="./Images/logo.jpg" // Replace with your image URL
              alt="Logo"
              className="w-10 h-12 mr-3" // Adjust width and height as needed
            />
            Designer
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
                onMouseEnter={() => link.dropdown && setServiceOpen(true)}
                onMouseLeave={() => link.dropdown && setServiceOpen(false)}
              >
                <a
                  href={link.link}
                  className="text-Black hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
                {link.dropdown && serviceOpen && (
                  <ul className="dropdown-menu absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                    {link.dropdown.map((item) => (
                      <li key={item.name} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={item.link}
                          className="text-Black hover:text-gray-400 duration-500"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <Button className="text-Black">
              <Link to="/SignUp">Sign Up/Log In</Link>
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;