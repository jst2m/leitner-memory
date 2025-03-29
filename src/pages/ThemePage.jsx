// src/pages/ThemePage.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LeitnerContext } from "../context/LeitnerContext";
import Card from "../components/Card";
import AddCardFormPage from "./AddCardFormPage";

export default function ThemePage() {
  const { themeId } = useParams();
  const navigate = useNavigate();
  const { themes } = useContext(LeitnerContext);
  const [showAddCardForm, setShowAddCardForm] = useState(false);

  if (!themes) {
    return <div>Loading...</div>;
  }
  const theme = themes.find((t) => t.id === parseInt(themeId, 10));
  
  if (!theme) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <p>Theme not found</p>
        <button onClick={() => navigate(-1)} className="text-purple-400 mt-4">&larr; Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="text-purple-400 mb-4">&larr; Back</button>
      <h2 className="text-2xl font-bold mb-2">{theme.name}</h2>
      <p className="mb-4">Cards in this theme:</p>
      {theme.levels && theme.levels.length > 0 ? (
        theme.levels.map((lvl) => (
          <div key={lvl.id} className="mb-4">
            <h3 className="text-xl font-bold text-purple-300">
              {lvl.name} (Every {lvl.interval} day(s))
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              {lvl.cards.map((card) => (
                <Card key={card.id} front={card.front} back={card.back} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No levels available for this theme.</p>
      )}
      <button onClick={() => setShowAddCardForm(true)} className="mt-4 bg-purple-600 text-white px-3 py-2 rounded">
        Add New Card
      </button>
      {showAddCardForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <AddCardFormPage
            themeId={parseInt(themeId, 10)}
            levelId={theme.levels?.[0]?.id} // Par défaut, on ajoute la carte au premier niveau s'il existe
            onClose={() => setShowAddCardForm(false)}
          />
        </div>
      )}
    </div>
  );
}
