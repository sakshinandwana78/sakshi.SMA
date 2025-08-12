// import React from "react";
 import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Collaboration from "./Collaboration";
import Analytics from "./Analytics";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";
import LayoutSection from "./LayoutSection";
import Contact from "./Contact";
import CreatePost from "./CreatePost";

const Home = () => (
  <LayoutSection className="bg-yellow-50 text-center pt-32">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      The Complete Solution to Take Care of Your Social Media Profiles
    </h1>
    <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto">
      SocialPro empowers individuals, creators, and businesses to master their
      social media presence effortlessly. Schedule posts, collaborate with
      your team, and get deep insights — all from one intuitive platform.
      Simplify your workflow, boost engagement, and watch your online community
      grow with tools designed for success.
    </p>
    <div className="inline-flex rounded-md shadow-sm">
      {/* <input
        type="email"
        placeholder="Enter your email"
        className="p-4 rounded-l-md border border-gray-300 w-80 text-gray-900 focus:outline-yellow-500"
      /> */}
  
<Link
  to="/create-post"
  className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600"
>
  Get Started
</Link>

      
    </div>
     <Dashboard />
      <Collaboration />
      <Analytics />
      <SocialLinks />
      <Testimonials />
      <LayoutSection />
      <Contact />
      <CreatePost />

  </LayoutSection>
);

export default Home;