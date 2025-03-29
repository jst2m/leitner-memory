// src/pages/SpacedRepetitionPage.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LeitnerContext } from "../context/LeitnerContext";
import AddThemeFormPage from "../pages/AddThemeFormPage";

export default function SpacedRepetitionPage() {
  const { themes } = useContext(LeitnerContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-xl font-bold mb-4">Spaced Repetition</h1>

      {/* Calendrier simplifié */}
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

      {/* Liste des thèmes avec niveaux cliquables */}
      <ul className="mb-4">
        {themes.map((theme) => (
          <li key={theme.id} className="mb-4 border p-2 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-purple-400">{theme.name}</div>
              {/* Lien vers la page du thème complet */}
              <Link to={`/themes/${theme.id}`} className="text-sm text-purple-300 underline">
                View Cards
              </Link>
            </div>
            <div className="mt-2">
            {theme.levels.map((level) => (
              <div key={level.id} className="mb-1">
                <Link
                  to={`/themes/${theme.id}/level/${level.id}`}
                  className="text-sm text-purple-300 underline"
                >
                  {level.name} (Tous les {level.interval} jour(s)) - {level.cards ? level.cards.length : 0} cards
                </Link>
              </div>
            ))}

            </div>
          </li>
        ))}
      </ul>

      {/* Bouton pour ajouter un nouveau thème */}
      <button className="text-sm text-purple-400 underline mb-4" onClick={() => setShowAddForm(true)}>
        Add New Theme
      </button>
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <AddThemeFormPage onClose={() => setShowAddForm(false)} />
        </div>
      )}

      {/* Bouton pour démarrer la révision */}
      <button
        onClick={() => navigate("/review")}
        className="bg-purple-600 text-white w-full py-2 rounded font-bold"
      >
        Today’s Test
      </button>
    </div>
  );
}
