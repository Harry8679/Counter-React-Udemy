import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const getColor = () => {
    if (count > 0) return "text-green-500";
    if (count < 0) return "text-red-500";
    return "text-gray-500";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Compteur</h1>
      <p className={`text-4xl font-bold mb-4 ${getColor()}`}>{count}</p>
      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Ajouter
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setCount(0)}
        >
          Remettre à 0
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          Enlever
        </button>
      </div>
    </div>
  );
}