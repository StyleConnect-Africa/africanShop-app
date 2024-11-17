import React from "react";

const CircularProgress = ({ currentStep, totalSteps }) => {
  const radius = 24; // Increased radius of the circle
  const stroke = 4; // Stroke width
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (currentStep / totalSteps) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="absolute top-4 right-4"
    >
      <circle
        stroke="#000"
        fill="#000" // Background color changed to black
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#FF9900" // Primary color for progress (Bootstrap primary color)
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset: circumference - progress }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="10"
        fill="#FF9900" // Text color changed to white
      >
        {Math.round((currentStep / totalSteps) * 100)}%
      </text>
    </svg>
  );
};

export default CircularProgress;
