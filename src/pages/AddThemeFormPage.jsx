// src/pages/AddThemeFormPage.jsx
import React, { useState, useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";

export default function AddThemeFormPage({ onClose }) {
  const { addCategory } = useContext(LeitnerContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a category name.");
      return;
    }
    addCategory(name);
    setName("");
    setError("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Add New Category</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-1 text-black mb-2"
        placeholder="Category Name"
      />
      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      <div>
        <button type="submit" className="bg-purple-600 px-3 py-2 rounded">
          Add Category
        </button>
        <button onClick={onClose} type="button" className="ml-2 text-gray-300">
          Cancel
        </button>
      </div>
    </form>
  );
}
