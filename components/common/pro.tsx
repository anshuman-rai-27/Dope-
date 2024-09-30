import React from 'react';
import EmojiConfetti from './click';

interface GamifiedProgressBarProps {
  progress: number;
}

const GamifiedProgressBar: React.FC<GamifiedProgressBarProps> = ({ progress }) => {
  return (
    <>
    <div className='w-full flex justify-center text-4xl font-bold'>Course Progress:</div>
    <div className="relative w-full h-[3vw] max-w-lg mx-auto mt-10">
      {/* Background container */}
      <div className="bg-blue-300 rounded-full h-10 flex items-center">
        {/* Stars and progress text */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-white font-bold">
          {progress}% Complete
        </div>

        {/* Progress bar */}
        <div
          className="h-10 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Fun completion stars */}
      <div className="flex justify-between mt-3 text-indigo-500 text-xl">
        {[20, 40, 60, 80, 100].map((value) => (
          <div
            key={value}
            className={`${
              progress >= value
                ? 'text-indigo-500 animate-bounce'
                : 'text-gray-400'
            }`}
          >
            ⭐
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-center mt-[5vw]'><EmojiConfetti/></div>
    
    </>
  );
};

export default GamifiedProgressBar;
