// src/components/EditCardModal.jsx
import React, { useState, useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";

export default function EditCardModal({ card, themeId, onSave, onDelete, onClose }) {
  const { themes, moveCard } = useContext(LeitnerContext);
  const currentTheme = themes.find((t) => t.id === themeId);
  const maxLevel = currentTheme ? currentTheme.levels.length : 6;

  const [front, setFront] = useState(card.front);
  const [back, setBack] = useState(card.back);
  const [selectedLevel, setSelectedLevel] = useState(card.level); // niveau actuel par défaut

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ front, back });
  };

  const handleMove = () => {
    if (selectedLevel !== card.level) {
      moveCard(themeId, card.id, selectedLevel);
    }
    onClose();
  };

  return (
    <div className="bg-gray-900 p-4 rounded w-full max-w-md">
      <h2 className="text-xl mb-4">Modifier la carte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-1">Front:</label>
          <input
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            className="w-full p-1 text-black"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Back:</label>
          <input
            type="text"
            value={back}
            onChange={(e) => setBack(e.target.value)}
            className="w-full p-1 text-black"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Déplacer la carte vers le niveau :</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(parseInt(e.target.value, 10))}
            className="w-full p-1 text-black"
          >
            {Array.from({ length: maxLevel }, (_, i) => i + 1).map((lvl) => (
              <option key={lvl} value={lvl}>
                Niveau {lvl}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-green-600 px-3 py-1 rounded mr-2">
            Sauvegarder
          </button>
          <button
            type="button"
            onClick={handleMove}
            className="bg-blue-600 px-3 py-1 rounded mr-2"
          >
            Déplacer
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="bg-red-600 px-3 py-1 rounded mr-2"
          >
            Supprimer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 px-3 py-1 rounded"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
