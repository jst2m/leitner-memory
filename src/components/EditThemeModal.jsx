// src/components/EditThemeModal.jsx
import React, { useState, useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";

export default function EditThemeModal({ theme, onClose }) {
  const { updateCategory, deleteCategory } = useContext(LeitnerContext);
  const [newName, setNewName] = useState(theme.name);

  const handleSave = () => {
    updateCategory(theme.id, newName);
    onClose();
  };

  const handleDelete = () => {
    deleteCategory(theme.id);
    onClose();
  };

  return (
    <div className="bg-gray-900 p-4 rounded w-full max-w-md">
      <h2 className="text-xl mb-4">Modifier le thème</h2>
      <label className="block mb-2">Nouveau nom :</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className="w-full p-1 text-black mb-4"
      />
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-green-600 px-3 py-1 rounded mr-2"
        >
          Sauvegarder
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-3 py-1 rounded mr-2"
        >
          Supprimer
        </button>
        <button
          onClick={onClose}
          className="bg-gray-600 px-3 py-1 rounded"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
