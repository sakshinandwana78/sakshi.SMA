
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="bg-white App font-sans pt-24 text-gray-900">
      <Navbar /> {/* Global Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
 
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Footer /> {/* Global Footer on all pages */}
    </div>
  );
}

export default App;

