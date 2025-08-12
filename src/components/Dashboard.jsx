import React from "react";
import LayoutSection from "./LayoutSection";
const Dashboard = () => {
  const metrics = [
    { label: "Total Reach", value: "25.3K", change: "+12%" },
    { label: "Engagement", value: "8.7K", change: "+9%" },
    { label: "New Followers", value: "1.2K", change: "+5%" },
    { label: "Posts Published", value: "48", change: "+14%" },
  ];

  const monthlyData = [
    { month: "Mar", value: 240 },
    { month: "Apr", value: 310 },
    { month: "May", value: 400 },
    { month: "Jun", value: 520 },
    { month: "Jul", value: 490 },
    { month: "Aug", value: 610 },
  ];

  const maxVal = Math.max(...monthlyData.map((d) => d.value));

  return (
    <LayoutSection id="analytics-dashboard" className="bg-yellow-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Analytics Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {metrics.map(({ label, value, change }) => (
          <div
            key={label}
            className="bg-white p-6 rounded shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="text-gray-700 font-semibold text-lg mb-2">{label}</h3>
            <p className="text-2xl font-bold text-yellow-600">{value}</p>
            <p className="text-sm text-green-600 mt-1">{change} this month</p>
          </div>
        ))}
      </div>

   
    </LayoutSection>
  );
};
export default Dashboard;
