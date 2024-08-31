import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Animal from './Animal';

const Zoo = forwardRef((props, ref) => {
  const initialAnimals = [
    { type: 'Monkey', health: 100, id: 1 },
    { type: 'Monkey', health: 100, id: 2 },
    { type: 'Monkey', health: 100, id: 3 },
    { type: 'Monkey', health: 100, id: 4 },
    { type: 'Monkey', health: 100, id: 5 },
    { type: 'Dog', health: 100, id: 6 },
    { type: 'Dog', health: 100, id: 7 },
    { type: 'Dog', health: 100, id: 8 },
    { type: 'Dog', health: 100, id: 9 },
    { type: 'Dog', health: 100, id: 10 },
    { type: 'Elephant', health: 100, id: 11 },
    { type: 'Elephant', health: 100, id: 12 },
    { type: 'Elephant', health: 100, id: 13 },
    { type: 'Elephant', health: 100, id: 14 },
    { type: 'Elephant', health: 100, id: 15 },
  ];

  const [animals, setAnimals] = useState(initialAnimals);
  const [time, setTime] = useState(0);

  useImperativeHandle(ref, () => ({
    updateHealth() {
      setAnimals(prevAnimals =>
        prevAnimals.map(animal => {
          const decrease = Math.random() * 20;
          const newHealth = animal.health * (1 - decrease / 100);
          let status = "Alive";

          if (animal.type === "Monkey" && newHealth < 30) {
            status = "Dead";
          } else if (animal.type === "Dog" && newHealth < 50) {
            status = "Dead";
          } else if (animal.type === "Elephant") {
            if (newHealth < 70) {
              status = "Cannot Walk";
            }
            if (newHealth < 70 && animal.status === "Cannot Walk") {
              status = "Dead";
            }
          }

          return {
            ...animal,
            health: status === "Dead" ? 0 : newHealth,
            status,
          };
        })
      );
      setTime(prevTime => prevTime + 1);
    },

    feedAnimals() {
      setAnimals(prevAnimals =>
        prevAnimals.map(animal => {
          const increase = Math.random() * 15 + 10;
          const newHealth = Math.min(100, animal.health * (1 + increase / 100));
          return {
            ...animal,
            health: newHealth,
            status: "Alive",
          };
        })
      );
    }
  }));

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Zoo Simulator</h1>
        <p className="text-lg text-gray-700 mt-2">Current Time: {time} hours</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map(animal => (
          <Animal key={animal.id} {...animal} />
        ))}
      </div>
    </div>
  );
});

export default Zoo;
