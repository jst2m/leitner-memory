// src/pages/CalendarPage.jsx
import React, { useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";
import Header from "../components/Header";

export default function CalendarPage() {
  const { themes } = useContext(LeitnerContext);
  const daysInMonth = 30;
  const today = new Date();

  const handleClickDate = (date) => {
    // Rediriger vers la page des cartes dues ce jour (à implémenter)
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <Header title="Calendar" />
      <div className="grid grid-cols-7 gap-2">
        {[...Array(daysInMonth)].map((_, i) => {
          const currentDate = new Date(today.getFullYear(), today.getMonth(), i + 1);
          return (
            <div
              key={i}
              onClick={() => handleClickDate(currentDate)}
              className="cursor-pointer bg-gray-700 text-center p-2 rounded"
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
