"use client"
import React from 'react';

interface ToolkitItem {
  title: string;
  icon: JSX.Element;
}

const toolkitItems: ToolkitItem[] = [
  { title: "The Rules", icon: <span>📋</span> },
  { title: "Rights & Responsibilities", icon: <span>📝</span> },
  { title: "Prohibited Substances", icon: <span>🚫</span> },
  { title: "Doping Control Process", icon: <span>🧪</span> },
  { title: "Whereabouts", icon: <span>📍</span> },
  { title: "Therapeutic Use Exemption (TUE)", icon: <span>🩺</span> },
  { title: "Athlete Biological Passport", icon: <span>📊</span> },
  { title: "Risk of Nutritional Supplements", icon: <span>💊</span> },
  { title: "Paris Pinnacle Booklet", icon: <span>📖</span> },
];

const AthleteToolkit: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Athlete Toolkit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toolkitItems.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthleteToolkit;
