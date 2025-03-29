// src/components/EditCardModal.jsx
import React, { useState } from "react";

export default function EditCardModal({ card, onSave, onDelete, onClose }) {
  const [front, setFront] = useState(card.front);
  const [back, setBack] = useState(card.back);
  const [level, setLevel] = useState(card.level);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ front, back, level });
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
    <div className="bg-gray-900 p-4 z-50 rounded w-full max-w-md">
      <h2 className="text-xl mb-4">Modifier la carte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Front:</label>
          <input
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            className="w-full p-1 text-black"
          />
        </div>
        <div className="mb-2">
          <label>Back:</label>
          <input
            type="text"
            value={back}
            onChange={(e) => setBack(e.target.value)}
            className="w-full p-1 text-black"
          />
        </div>
        <div className="mb-2">
          <label>Niveau:</label>
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value, 10))}
            className="w-full p-1 text-black"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-green-600 px-3 py-1 rounded mr-2">
            Sauvegarder
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
    </div>
  );
}
