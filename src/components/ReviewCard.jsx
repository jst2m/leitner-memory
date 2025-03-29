// src/components/ReviewCard.jsx
import React, { useState } from "react";
import Card from "./Card";

export default function ReviewCard({ card, onCorrect, onWrong }) {
  if (!card) {
    console.error("ReviewCard: La prop 'card' est undefined");
    return <div className="text-red-500">Erreur : carte manquante</div>;
  }
  if (card.front === undefined) {
    console.error("ReviewCard: card.front est undefined", card);
    return <div className="text-red-500">Erreur : donnée 'front' manquante</div>;
  }

  const [result, setResult] = useState(null);

  const handleCorrect = () => {
    setResult("correct");
    onCorrect(card.id);
  };

  const handleWrong = () => {
    setResult("wrong");
    onWrong(card.id);
  };

  return (
    <div className={`p-4 border rounded ${
      result === "correct"
        ? "bg-green-500"
        : result === "wrong"
        ? "bg-red-500"
        : "bg-gray-800"
    }`}>
      <Card front={card.front} back={card.back} />
      <div className="flex justify-around mt-2">
        <button
          onClick={handleCorrect}
          className="bg-green-600 text-white px-3 py-2 md:px-4 md:py-2 rounded"
        >
          Trouvé!
        </button>
        <button
          onClick={handleWrong}
          className="bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded"
        >
          Mince!
        </button>
      </div>
    </div>
  );
}
