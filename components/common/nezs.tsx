"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `India continues to lead the charts in dope positive cases
With the Paris Olympics around the corner, NADA would do well to ramp up the number of tests to curb the doping menace.`;

export function TextGenerateEffectDemo() {
  return (
    <>
    <div className="px-[15vw] my-[5vw]">
    <TextGenerateEffect words={words} />
    </div>
    </>
  );
}
