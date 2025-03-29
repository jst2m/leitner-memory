// src/pages/LevelPage.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LeitnerContext } from "../context/LeitnerContext";
import ReviewCard from "../components/ReviewCard";

export default function LevelPage() {
  const { themeId, levelId } = useParams();
  const navigate = useNavigate();
  const { themes, correctAnswer, wrongAnswer } = useContext(LeitnerContext);

  const theme = themes.find((t) => t.id === parseInt(themeId, 10));
  if (!theme) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <p>Theme not found</p>
        <button onClick={() => navigate(-1)} className="text-purple-400 mt-4">&larr; Retour</button>
      </div>
    );
  }

  const level = theme.levels.find((lvl) => lvl.id === parseInt(levelId, 10));
  if (!level) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <p>Level not found</p>
        <button onClick={() => navigate(-1)} className="text-purple-400 mt-4">&larr; Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="text-purple-400 mb-4">&larr; Back</button>
      <h1 className="text-2xl font-bold mb-2">{theme.name} - {level.name}</h1>
      <p className="mb-4">Interval: tous les {level.interval} jour(s)</p>
      {level.cards && level.cards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {level.cards.map((card) => (
            <ReviewCard key={card.id} card={card} onCorrect={correctAnswer} onWrong={wrongAnswer} />
          ))}
        </div>
      ) : (
        <p>Pas de cartes à reviser à ce niveau ^^.</p>
      )}
    </div>
  );
}
