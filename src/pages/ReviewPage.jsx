// src/pages/ReviewPage.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LeitnerContext } from "../context/LeitnerContext";
import ReviewCard from "../components/ReviewCard";

export default function ReviewPage() {
  const { startReview, correctAnswer, wrongAnswer } = useContext(LeitnerContext);
  const cardsToReview = startReview();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-purple-400 mb-4"
      >
        &larr; Retour
      </button>
      <h1 className="text-xl font-bold mb-4">Today’s Test</h1>
      {cardsToReview.length === 0 ? (
        <p>Super tu as tout revisé !</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cardsToReview.map((card) => (
            <ReviewCard
              key={card.id}
              card={card}
              onCorrect={correctAnswer}
              onWrong={wrongAnswer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
