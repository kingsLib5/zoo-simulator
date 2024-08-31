import React from 'react';
import { GiElephant, GiMonkey } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';

const getAnimalIcon = (type) => {
  switch (type) {
    case 'Monkey':
      return <GiMonkey className="text-yellow-600 text-5xl" />;
    case 'Dog':
      return <FaDog className="text-yellow-500 text-5xl" />;
    case 'Elephant':
      return <GiElephant className="text-gray-500 text-5xl" />;
    default:
      return null;
  }
};

const getHealthColor = (health) => {
  if (health > 70) return 'bg-green-500';
  if (health > 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

const Animal = ({ type, health, status }) => {
  const icon = getAnimalIcon(type);
  const healthColor = getHealthColor(health);
  const healthPercentage = `${health.toFixed(2)}%`;

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <div className="text-6xl">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{type}</h2>
          <p className={`text-lg font-semibold ${status === 'Dead' ? 'text-red-600' : 'text-green-600'}`}>
            {status}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full bg-gray-300 rounded-full h-6">
          <div
            className={`h-6 rounded-full ${healthColor} transition-all duration-500`}
            style={{ width: healthPercentage }}
          ></div>
        </div>
        <p className="text-center text-gray-700 font-medium mt-2">{healthPercentage} Health</p>
      </div>
    </div>
  );
};

export default Animal;
