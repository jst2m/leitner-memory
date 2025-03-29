// src/pages/SpacedRepetitionPage.jsx
import React, { useContext, useState } from "react";
import { LeitnerContext } from "../context/LeitnerContext";
import { Link, useNavigate } from "react-router-dom";
import AddThemeFormPage from "../pages/AddThemeFormPage";

export default function SpacedRepetitionPage() {
  const { themes } = useContext(LeitnerContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-xl font-bold mb-4">Spaced Repetition</h1>
      <div className="flex space-x-2 mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div
            key={index}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-white text-xs"
          >
            {day}
          </div>
        ))}
      </div>
      <ul className="mb-4">
        {themes.map((theme) => (
          <li key={theme.id} className="mb-4 border p-2 rounded">
            <div className="flex justify-between">
              <div className="font-bold text-purple-400">{theme.name}</div>
              <Link to={`/themes/${theme.id}`} className="text-sm text-purple-300 underline">
                View Cards
              </Link>
            </div>
            <div className="mt-2">
              {theme.levels.map((level) => (
                <div key={level.id} className="flex justify-between text-sm">
                  <span>{level.name} (Every {level.interval} day(s))</span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button className="text-sm text-purple-400 underline mb-4" onClick={() => setShowAddForm(true)}>
        Add New Theme
      </button>
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <AddThemeFormPage onClose={() => setShowAddForm(false)} />
        </div>
      )}
      <button
        onClick={() => navigate("/review")}
        className="bg-purple-600 text-white w-full py-2 rounded font-bold"
      >
        Today’s Test
      </button>
    </div>
  );
}
