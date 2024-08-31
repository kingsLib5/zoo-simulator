import React from 'react';

const ZooControls = ({ onAdvanceTime, onFeedAnimals }) => {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <button
        onClick={onAdvanceTime}
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
      >
        Advance Time
      </button>
      <button
        onClick={onFeedAnimals}
        className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition duration-300"
      >
        Feed Animals
      </button>
    </div>
  );
};

export default ZooControls;
