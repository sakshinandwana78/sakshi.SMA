import React from "react";
import LayoutSection from "./LayoutSection";
import { FaCalendarAlt, FaRocket, FaUsers, FaChartLine  } from 'react-icons/fa';


const Features = () => {
  const featuresData = [
    {
      title: "Smart Scheduling",
      desc: `Leverage AI to automatically schedule your posts for optimal engagement times, ensuring your content reaches your audience when they're most active.`,
      icon: <FaCalendarAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "All-in-One Dashboard",
      desc: `Manage multiple social media accounts in one place. Post, monitor, and respond seamlessly without juggling between different apps.`,
      icon: <FaUsers className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Performance Analytics",
      desc: `Gain valuable insights with comprehensive analytics. Track growth, engagement metrics, and content performance to refine your strategy.`,
      icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Bulk Scheduling",
      desc: `Upload multiple posts in one go and save hours of manual work.`,
      icon: <FaCalendarAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Best-Time Suggestions",
      desc: `Get AI-powered recommendations on when to post for maximum engagement.`,
      icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Team Collaboration",
      desc: `Invite your team members, assign roles, and work on posts together seamlessly.`,
      icon: <FaUsers className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <LayoutSection className="bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-black">
        Features Designed to Empower Your Social Media Strategy
      </h2>
      <div className="grid md:grid-cols-3 gap-10 text-left">
        {featuresData.map(({ title, desc, icon }) => (
          <div
            key={title}
            className="p-8 bg-gray-50 shadow rounded hover:shadow-lg transition cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">{icon}</div>
            <h3 className="font-semibold text-xl mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </LayoutSection>
  );
};
export default Features;
