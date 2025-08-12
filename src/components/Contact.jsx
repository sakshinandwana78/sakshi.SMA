import React, { useState } from "react";
import LayoutSection from "./LayoutSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or API submission here
    
    setSubmitted(true);  // Show popup
    
    // Optionally reset form fields or keep them
    e.target.reset();

    // Hide popup after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <LayoutSection className="bg-white text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We’re happy to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 text-gray-700 text-base">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">📍 Head Office</h3>
              <p>
                Urban Square Mall,<br />
                Udaipur - 313324, Rajasthan, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">📞 Phone</h3>
              <p>+91 78780 42673</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">📧 Email</h3>
              <p>
                sakshinandwana093@gmail.com<br />
                support@autosocial.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">⏰ Business Hours</h3>
              <p>Mon - Fri: 9:00 AM – 6:00 PM<br />Sat - Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 relative">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Send a Message
            </h3>
            
            {submitted && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center w-full max-w-sm">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
};

export default Contact;
