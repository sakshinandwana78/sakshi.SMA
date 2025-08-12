import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* Brand/About */}
      <div>
        <h3 className="text-xl font-bold text-yellow-500 mb-4">SocialPro</h3>
        <p className="text-sm leading-relaxed text-gray-400">
          SocialPro is your all-in-one platform to streamline social media management, boost engagement, and collaborate with your team — all from one dashboard.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-yellow-500">Home</a></li>
          <li><a href="/features" className="hover:text-yellow-500">Features</a></li>
          <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          <li><a href="/login" className="hover:text-yellow-500">Login</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>Urban Square Mall</li>
          <li>Udaipur - 313324, Rajasthan</li>
          <li>Email: sakshinandwana093@gmail.com</li>
          <li>Support: support@autosocial.com</li>
          <li>Phone: +91 7878042673</li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
        <p className="text-sm mb-4 text-gray-400">Subscribe to get the latest updates and offers.</p>
        <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  }}
  className="flex flex-col gap-2"
>
  <input
    type="email"
    placeholder="Your email"
    required
    className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
  />
  <button
    type="submit"
    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition"
  >
    Subscribe
  </button>
</form>

      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-gray-400"><FaGithub /></a>
      </div>
      <p>© {new Date().getFullYear()} SocialPro. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;