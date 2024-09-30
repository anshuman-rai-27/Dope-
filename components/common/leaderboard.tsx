import React from 'react';

const Leaderboard = () => {
  // Sample data for leaderboard
  const leaderboardData = [
    { name: 'John Doe', points: 1500 },
    { name: 'Jane Smith', points: 1400 },
    { name: 'Robert Johnson', points: 1300 },
    { name: 'Emily Davis', points: 1250 },
    { name: 'Michael Wilson', points: 1200 },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 py-[10vw] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Leaderboard</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 py-2 text-left text-lg font-semibold text-gray-700">Rank</th>
            <th className="border-b-2 border-gray-300 py-2 text-left text-lg font-semibold text-gray-700">Name</th>
            <th className="border-b-2 border-gray-300 py-2 text-right text-lg font-semibold text-gray-700">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-3 text-gray-700 text-lg">{index + 1}</td>
              <td className="py-3 text-gray-700 text-lg">{player.name}</td>
              <td className="py-3 text-gray-700 text-lg text-right">{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
