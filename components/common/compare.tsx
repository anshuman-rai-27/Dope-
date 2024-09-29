"use client"
import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
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
    <div className="p-4 flex justify-around items-center px-[15vw] gap-10 border rounded-3xl dark:bg-neutral-900 bg-[#E5D9F2]  border-neutral-200 dark:border-neutral-800 ">
        
        <div className="flex-1 md:pr-6">
        <h2 className="text-4xl font-semibold mb-4">Impacts of Doping </h2>
        <ul className="list-disc ml-5 space-y-2">
          {impacts.map((impact, index) => (
            <li key={index} className="text-gray-700">{impact}</li>
          ))}
        </ul>
        </div>
      <Compare
        firstImage="/common/dope.jpg"
        secondImage="/common/clean.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
