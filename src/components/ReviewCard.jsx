// src/components/ReviewCard.jsx
import React, { useState, useContext } from "react";
import Card from "./Card";
import { LeitnerContext } from "../context/LeitnerContext";
import EditCardModal from "./EditCardModal";

export default function ReviewCard({ card, themeId, onCorrect, onWrong }) {
  if (!card) {
    console.error("ReviewCard: La prop 'card' est undefined");
    return <div className="text-red-500">Erreur : carte manquante</div>;
  }
  if (card.front === undefined) {
    console.error("ReviewCard: card.front est undefined", card);
    return <div className="text-red-500">Erreur : donnée 'front' manquante</div>;
  }

  const [result, setResult] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const { updateCard, deleteCard } = useContext(LeitnerContext);

  const handleCorrect = () => {
    setResult("correct");
    onCorrect(card.id);
  };

  const handleWrong = () => {
    setResult("wrong");
    onWrong(card.id);
  };

  const handleSave = (updatedData) => {
    updateCard(themeId, card.id, updatedData);
    setShowEditModal(false);
  };

  return (
    <div
      className={`p-4 border rounded relative ${
        result === "correct"
          ? "bg-green-500"
          : result === "wrong"
          ? "bg-red-500"
          : "bg-gray-800"
      }`}
    >
      <Card front={card.front} back={card.back} />
      {/* Bouton d'édition */}
      <button
        onClick={() => setShowEditModal(true)}
        className="absolute top-2 right-2 text-gray-300"
      >
        ✏️
      </button>
      {showEditModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <EditCardModal
            card={card}
            onSave={handleSave}
            onDelete={() => {
              deleteCard(themeId, card.id);
              setShowEditModal(false);
            }}
            onClose={() => setShowEditModal(false)}
          />
        </div>
      )}
      {/* Boutons de révision */}
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
