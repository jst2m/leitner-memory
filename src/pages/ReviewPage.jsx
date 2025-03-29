// src/pages/ReviewPage.jsx
import React, { useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";
import ReviewCard from "../components/ReviewCard";

export default function ReviewPage() {
  const { startReview, correctAnswer, wrongAnswer } = useContext(LeitnerContext);
  const cardsToReview = startReview();
  console.log("cardsToReview:", cardsToReview);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-xl font-bold mb-4">Today’s Test</h1>
      {cardsToReview.length === 0 ? (
        <p>No cards to review today!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cardsToReview.map((card) => (
            <ReviewCard key={card.id} card={card} onCorrect={correctAnswer} onWrong={wrongAnswer} />
          ))}
        </div>
      )}
    </div>
  );
}
