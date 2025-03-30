// src/pages/AddLevelFormPage.jsx
import React, { useState, useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";

export default function AddLevelFormPage({ onClose }) {
  const { addLevel } = useContext(LeitnerContext);
  const [name, setName] = useState("");
  const [interval, setInterval] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addLevel(name, parseInt(interval, 10));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Add New Level</h2>
      <div className="mb-2">
        <label className="block text-sm">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-1 text-black"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm">Interval (days)</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="w-full p-1 text-black"
        />
      </div>
      <button type="submit" className="bg-purple-600 px-3 py-2 rounded">
        Add Level
      </button>
      <button onClick={onClose} type="button" className="ml-2 text-gray-300">
        Cancel
      </button>
    </form>
  );
}
