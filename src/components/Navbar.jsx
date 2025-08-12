// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl cursor-pointer text-yellow-600">
        SocialPro
      </Link>
      <div className="space-x-6 hidden md:flex">
        {["home", "features", "contact", "create-post"].map((sec) => (
          <Link
            key={sec}
            to={sec === "home" ? "/" : `/${sec}`}
            className="capitalize hover:text-yellow-500 text-gray-700"
          >
            {sec === "create-post" ? "Create Post" : sec}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

