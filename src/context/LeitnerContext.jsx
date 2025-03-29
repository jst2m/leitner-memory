// src/context/LeitnerContext.jsx
import React, { createContext, useState } from "react";

export const LeitnerContext = createContext();

export function LeitnerProvider({ children }) {
  const [themes, setThemes] = useState([
    {
      id: 101,
      name: "Français",
      levels: [
        {
          id: 1001,
          name: "Level 1",
          interval: 1, // Révision tous les 1 jour
          cards: [
            { id: 5001, front: "Bonjour", back: "Hello", level: 1, nextReviewDate: null },
            { id: 5002, front: "Merci", back: "Thank you", level: 1, nextReviewDate: null },
            { id: 5005, front: "Au revoir", back: "Goodbye", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 1002,
          name: "Level 2",
          interval: 2,
          cards: [
            { id: 5006, front: "Pomme", back: "Apple", level: 2, nextReviewDate: null },
          ],
        },
      ],
    },
    {
      id: 102,
      name: "Anglais",
      levels: [
        {
          id: 1003,
          name: "Level 1",
          interval: 1,
          cards: [
            { id: 5003, front: "Cat", back: "Chat", level: 1, nextReviewDate: null },
            { id: 5004, front: "Dog", back: "Chien", level: 1, nextReviewDate: null },
            { id: 5007, front: "House", back: "Maison", level: 1, nextReviewDate: null },
          ],
        },
      ],
    },
  ]);

  const addCardToLevel = (themeId, levelId, front, back) => {
    setThemes((prev) =>
      prev.map((theme) => {
        if (theme.id === themeId) {
          const updatedLevels = theme.levels.map((lvl) => {
            if (lvl.id === levelId) {
              const newCard = {
                id: Date.now(),
                front,
                back,
                level: lvl.id,
                nextReviewDate: null,
              };
              return { ...lvl, cards: [...lvl.cards, newCard] };
            }
            return lvl;
          });
          return { ...theme, levels: updatedLevels };
        }
        return theme;
      })
    );
  };

  const correctAnswer = (cardId) => {
    setThemes((prev) =>
      prev.map((theme) => ({
        ...theme,
        levels: theme.levels.map((lvl) => ({
          ...lvl,
          cards: lvl.cards.map((card) => {
            if (card.id === cardId) {
              const newLevel = card.level + 1;
              const interval = getInterval(newLevel);
              const nextReviewDate = addDays(new Date(), interval);
              return { ...card, level: newLevel, nextReviewDate };
            }
            return card;
          }),
        })),
      }))
    );
  };

  const wrongAnswer = (cardId) => {
    setThemes((prev) =>
      prev.map((theme) => ({
        ...theme,
        levels: theme.levels.map((lvl) => ({
          ...lvl,
          cards: lvl.cards.map((card) => {
            if (card.id === cardId) {
              const newLevel = card.level > 1 ? card.level - 1 : 1;
              const nextReviewDate = addDays(new Date(), getInterval(newLevel));
              return { ...card, level: newLevel, nextReviewDate };
            }
            return card;
          }),
        })),
      }))
    );
  };

  const startReview = () => {
    const today = new Date();
    let dueCards = [];
    themes.forEach((theme) => {
      theme.levels.forEach((lvl) => {
        if (Array.isArray(lvl.cards)) {
          lvl.cards.forEach((card) => {
            if (card && (!card.nextReviewDate || new Date(card.nextReviewDate) <= today)) {
              dueCards.push(card);
            }
          });
        }
      });
    });
    console.log("startReview - dueCards:", dueCards);
    return dueCards;
  };

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function getInterval(level) {
    const intervals = [1, 2, 4, 8, 16, 32, 64];
    return intervals[level - 1] || 64;
  }

  return (
    <LeitnerContext.Provider
      value={{
        themes,
        addCardToLevel,
        correctAnswer,
        wrongAnswer,
        startReview,
      }}
    >
      {children}
    </LeitnerContext.Provider>
  );
}
