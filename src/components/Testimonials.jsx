import React from "react";
import LayoutSection from "./LayoutSection";
import { useState, useEffect } from "react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Influencer",
      text: `“SocialPro transformed how I manage my brand. The scheduling and analytics helped me double my engagement in just 3 months!”`,
    },
    {
      name: "David Kim",
      role: "Small Business Owner",
      text: `“The team collaboration features make working with my marketing team seamless and efficient. Highly recommend!”`,
    },
    {
      name: "Emma Watson",
      role: "Content Creator",
      text: `“I love how intuitive the platform is. It saves me hours every week and helps me stay consistent.”`,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
 <LayoutSection id="testimonials" className="bg-yellow-50">
  <h2 className="py-4 text-4xl font-bold mb-4 text-center text-gray-900">
    What Our Users Say
  </h2>

  <div className="py-4 max-w-3xl mx-auto bg-white p-6 rounded shadow-lg text-center">
    <p className="italic text-gray-800 mb-4 text-lg">
      {testimonials[current].text}
    </p>
    <p className="font-semibold text-yellow-600">
      {testimonials[current].name}
    </p>
    <p className="text-gray-600 text-sm">
      {testimonials[current].role}
    </p>
  </div>
</LayoutSection>

  );
};
export default Testimonials;
