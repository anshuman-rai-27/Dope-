import React from 'react';
import { CompareDemo } from '../common/compare';

const DopingImpact = () => {
  const impacts = [
    "Increased risk of heart disease and strokes",
    "Liver damage and toxicity",
    "Hormonal imbalances leading to infertility",
    "Muscle and tendon injuries",
    "Mood swings and mental health issues",
    "Addiction and dependency",
    "Weakened immune system and frequent illnesses",
    "Decreased performance over time due to reliance on drugs",
    "Reputation damage and legal consequences",
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-md px-[15vw]">
      <div className="flex-1 md:pr-6">
        <h2 className="text-2xl font-semibold mb-4">Impacts of Doping on Athletes</h2>
        <ul className="list-disc ml-5 space-y-2">
          {impacts.map((impact, index) => (
            <li key={index} className="text-gray-700">{impact}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 md:mt-0 md:w-1/3">
        {/* <img 
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Impact of Doping on Athletes"
          className="w-full h-auto rounded-lg"
        /> */}
        <CompareDemo/>
      </div>
    </div>
  );
};

export default DopingImpact;
