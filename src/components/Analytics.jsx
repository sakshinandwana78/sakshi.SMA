import React from "react";
import LayoutSection from "./LayoutSection";
const Analytics = () => {
  // Simple SVG bar chart mockup
  const data = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 55 },
    { label: "Mar", value: 75 },
    { label: "Apr", value: 65 },
    { label: "May", value: 90 },
    { label: "Jun", value: 100 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <LayoutSection id="analytics" className="bg-yellow-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Performance Analytics Overview
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
        <svg
          viewBox="0 0 600 300"
          width="100%"
          height="200"
          className="mb-6"
          aria-label="Bar chart of monthly social media engagement"
          role="img"
        >
          {data.map(({ label, value }, idx) => {
            const barHeight = (value / maxValue) * 200;
            return (
              <g key={label} transform={`translate(${idx * 100 + 50}, 200)`}>
                <rect
                  x={-25}
                  y={-barHeight}
                  width={50}
                  height={barHeight}
                  fill="#F59E0B"
                  rx="5"
                />
                <text
                  x={0}
                  y={15}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#374151"
                >
                  {label}
                </text>
                <text
                  x={0}
                  y={-barHeight - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#B45309"
                >
                  {value}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-center text-gray-700 text-lg">
          Track your monthly engagement and see what content works best.
        </p>
      </div>
    </LayoutSection>
  );
};

export default Analytics;
