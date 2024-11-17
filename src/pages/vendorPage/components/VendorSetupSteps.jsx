// src/pages/vendorPage/components/VendorSetupSteps.jsx
import React from "react";

const steps = [
  {
    number: 1,
    title: "Register",
    description: "Create an account to get started.",
  },
  {
    number: 2,
    title: "Profile Setup",
    description: "Complete your profile details.",
  },
  {
    number: 3,
    title: "Add Products",
    description: "List your products for sale.",
  },
  {
    number: 4,
    title: "Set Pricing",
    description: "Define pricing for your products.",
  },
  {
    number: 5,
    title: "Launch Store",
    description: "Go live and start selling!",
  },
];

const VendorSetupSteps = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl font-bold mb-6">Vendor's Store Setup</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative mb-4">
              <div className="text-4xl font-bold text-white bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg">
                {step.number}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorSetupSteps;
