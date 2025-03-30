import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LeitnerContext } from "../context/LeitnerContext";
import AddThemeFormPage from "../pages/AddThemeFormPage";
import EditThemeModal from "../components/EditThemeModal"; // Assurez-vous que ce composant existe

export default function SpacedRepetitionPage() {
  const { themes } = useContext(LeitnerContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const [themeToEdit, setThemeToEdit] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-xl font-bold mb-4">Spaced Repetition</h1>

      {/* Potentiel calendrier */}
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
            <div className="flex justify-between items-center">
              <div className="font-bold text-purple-400">{theme.name}</div>
              <div className="flex items-center">
                <Link
                  to={`/themes/${theme.id}`}
                  className="text-sm text-purple-300 underline"
                >
                  View Cards
                </Link>
                <button
                  onClick={() => setThemeToEdit(theme)}
                  className="text-sm text-gray-300 ml-2"
                >
                  ✏️
                </button>
              </div>
            </div>
            <div className="mt-2">
              {theme.levels.map((level) => (
                <div key={level.id} className="mb-1">
                  <Link
                    to={`/themes/${theme.id}/level/${level.id}`}
                    className="text-sm text-purple-300 underline"
                  >
                    {level.name} (Tous les {level.interval} jour(s)) -{" "}
                    {level.cards ? level.cards.length : 0} cards
                  </Link>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Bouton pour ajouter un nouveau thème */}
      <button
        className="text-sm text-purple-400 underline mb-4"
        onClick={() => setShowAddForm(true)}
      >
        Add New Theme
      </button>
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <AddThemeFormPage onClose={() => setShowAddForm(false)} />
        </div>
      )}

      {/* Modale d'édition d'un thème */}
      {themeToEdit && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <EditThemeModal
            theme={themeToEdit}
            onClose={() => setThemeToEdit(null)}
          />
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
