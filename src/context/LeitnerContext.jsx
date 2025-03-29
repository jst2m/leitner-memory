// src/context/LeitnerContext.jsx
import React, { createContext, useState } from "react";

export const LeitnerContext = createContext();

export function LeitnerProvider({ children }) {
  const [themes, setThemes] = useState([
    {
      id: 201,
      name: "Maths",
      levels: [
        {
          id: 2101,
          name: "Niveau 1",
          interval: 1,
          cards: [
            { id: 5101, front: "1 + 1", back: "2", level: 1, nextReviewDate: null },
            { id: 5102, front: "2 + 3", back: "5", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 2102,
          name: "Niveau 2",
          interval: 2,
          cards: [
            { id: 5103, front: "√16", back: "4", level: 2, nextReviewDate: null },
          ],
        },
        {
          id: 2103,
          name: "Niveau 3",
          interval: 4,
          cards: [
            { id: 5104, front: "Intégrale de x dx", back: "x²/2 + C", level: 3, nextReviewDate: null },
          ],
        },
        {
          id: 2104,
          name: "Niveau 4",
          interval: 8,
          cards: [
            { id: 5105, front: "Dérivée de sin(x)", back: "cos(x)", level: 4, nextReviewDate: null },
          ],
        },
        {
          id: 2105,
          name: "Niveau 5",
          interval: 16,
          cards: [
            { id: 5106, front: "Limite de (1+1/n)^n", back: "e", level: 5, nextReviewDate: null },
          ],
        },
        {
          id: 2106,
          name: "Niveau 6",
          interval: 32,
          cards: [
            { id: 5107, front: "Résoudre x² - 4 = 0", back: "x = -2 ou 2", level: 6, nextReviewDate: null },
          ],
        },
      ],
    },
    {
      id: 202,
      name: "Histoire",
      levels: [
        {
          id: 2201,
          name: "Niveau 1",
          interval: 1,
          cards: [
            { id: 5201, front: "Date de la Révolution française", back: "1789", level: 1, nextReviewDate: null },
            { id: 5202, front: "Qui était Napoléon ?", back: "Empereur français", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 2202,
          name: "Niveau 2",
          interval: 2,
          cards: [
            { id: 5203, front: "Traité de Versailles signé en", back: "1919", level: 2, nextReviewDate: null },
          ],
        },
        {
          id: 2203,
          name: "Niveau 3",
          interval: 4,
          cards: [
            { id: 5204, front: "Qui était Cléopâtre ?", back: "Reine d'Égypte", level: 3, nextReviewDate: null },
          ],
        },
        {
          id: 2204,
          name: "Niveau 4",
          interval: 8,
          cards: [
            { id: 5205, front: "Dates clés de la Guerre froide", back: "1947-1991", level: 4, nextReviewDate: null },
          ],
        },
        {
          id: 2205,
          name: "Niveau 5",
          interval: 16,
          cards: [
            { id: 5206, front: "Qui a signé la Magna Carta ?", back: "Les barons anglais", level: 5, nextReviewDate: null },
          ],
        },
        {
          id: 2206,
          name: "Niveau 6",
          interval: 32,
          cards: [
            { id: 5207, front: "Raison d'être de la Renaissance", back: "Redécouverte de l'Antiquité", level: 6, nextReviewDate: null },
          ],
        },
      ],
    },
    {
      id: 203,
      name: "Science",
      levels: [
        {
          id: 2301,
          name: "Niveau 1",
          interval: 1,
          cards: [
            { id: 5301, front: "Symbole de l'eau", back: "H₂O", level: 1, nextReviewDate: null },
            { id: 5302, front: "Planète la plus proche du Soleil", back: "Mercure", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 2302,
          name: "Niveau 2",
          interval: 2,
          cards: [
            { id: 5303, front: "Force gravitationnelle", back: "Attraction entre deux masses", level: 2, nextReviewDate: null },
          ],
        },
        {
          id: 2303,
          name: "Niveau 3",
          interval: 4,
          cards: [
            { id: 5304, front: "Qu'est-ce que la photosynthèse ?", back: "Processus de conversion de la lumière en énergie", level: 3, nextReviewDate: null },
          ],
        },
        {
          id: 2304,
          name: "Niveau 4",
          interval: 8,
          cards: [
            { id: 5305, front: "Unité de base de la matière", back: "L'atome", level: 4, nextReviewDate: null },
          ],
        },
        {
          id: 2305,
          name: "Niveau 5",
          interval: 16,
          cards: [
            { id: 5306, front: "Loi de Newton sur l'action et la réaction", back: "Pour chaque action, il y a une réaction égale et opposée", level: 5, nextReviewDate: null },
          ],
        },
        {
          id: 2306,
          name: "Niveau 6",
          interval: 32,
          cards: [
            { id: 5307, front: "Que signifie DNA ?", back: "Acide désoxyribonucléique", level: 6, nextReviewDate: null },
          ],
        },
      ],
    },
    {
      id: 204,
      name: "Français",
      levels: [
        {
          id: 2401,
          name: "Niveau 1",
          interval: 1,
          cards: [
            { id: 5401, front: "Conjugaison : je mange", back: "je mange", level: 1, nextReviewDate: null },
            { id: 5402, front: "Orthographe : 'à' vs 'a'", back: "À = préposition, a = verbe avoir", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 2402,
          name: "Niveau 2",
          interval: 2,
          cards: [
            { id: 5403, front: "Figure de style : Métaphore", back: "Comparaison implicite", level: 2, nextReviewDate: null },
          ],
        },
        {
          id: 2403,
          name: "Niveau 3",
          interval: 4,
          cards: [
            { id: 5404, front: "Identifier l'adjectif dans une phrase", back: "Exemple : 'rouge' dans 'la pomme rouge'", level: 3, nextReviewDate: null },
          ],
        },
        {
          id: 2404,
          name: "Niveau 4",
          interval: 8,
          cards: [
            { id: 5405, front: "Conjugaison au passé composé", back: "J'ai mangé", level: 4, nextReviewDate: null },
          ],
        },
        {
          id: 2405,
          name: "Niveau 5",
          interval: 16,
          cards: [
            { id: 5406, front: "Quelle est la fonction de l'adverbe ?", back: "Modifie un verbe, un adjectif ou un autre adverbe", level: 5, nextReviewDate: null },
          ],
        },
        {
          id: 2406,
          name: "Niveau 6",
          interval: 32,
          cards: [
            { id: 5407, front: "Analyse d'une phrase complexe", back: "Identifier propositions principales et subordonnées", level: 6, nextReviewDate: null },
          ],
        },
      ],
    },
    {
      id: 205,
      name: "Anglais",
      levels: [
        {
          id: 2501,
          name: "Level 1",
          interval: 1,
          cards: [
            { id: 5501, front: "Hello", back: "Bonjour", level: 1, nextReviewDate: null },
            { id: 5502, front: "Goodbye", back: "Au revoir", level: 1, nextReviewDate: null },
          ],
        },
        {
          id: 2502,
          name: "Level 2",
          interval: 2,
          cards: [
            { id: 5503, front: "Please", back: "S'il vous plaît", level: 2, nextReviewDate: null },
          ],
        },
        {
          id: 2503,
          name: "Level 3",
          interval: 4,
          cards: [
            { id: 5504, front: "Thank you", back: "Merci", level: 3, nextReviewDate: null },
          ],
        },
        {
          id: 2504,
          name: "Level 4",
          interval: 8,
          cards: [
            { id: 5505, front: "How are you?", back: "Comment ça va ?", level: 4, nextReviewDate: null },
          ],
        },
        {
          id: 2505,
          name: "Level 5",
          interval: 16,
          cards: [
            { id: 5506, front: "I love programming", back: "J'adore programmer", level: 5, nextReviewDate: null },
          ],
        },
        {
          id: 2506,
          name: "Level 6",
          interval: 32,
          cards: [
            { id: 5507, front: "Practice makes perfect", back: "C'est en forgeant qu'on devient forgeron", level: 6, nextReviewDate: null },
          ],
        },
      ],
    },
  ]);

  const addCategory = (name) => {
    const newTheme = {
      id: Date.now(),
      name,
      levels: []
    };
    setThemes((prevThemes) => [...prevThemes, newTheme]);
  };

  const addCardToLevel = (themeId, levelId, front, back) => {
    setThemes((prevThemes) =>
      prevThemes.map((theme) => {
        if (theme.id === themeId) {
          const updatedLevels = theme.levels.map((lvl) => {
            if (lvl.id === levelId) {
              const newCard = {
                id: Date.now(),
                front,
                back,
                level: lvl.cards.length > 0 ? lvl.cards[0].level : 1,
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
    setThemes((prevThemes) =>
      prevThemes.map((theme) => {
        let cardFound = null;
        let oldLevelIndex = null;
        const newLevels = theme.levels.map((lvl, index) => {
          const cardIndex = lvl.cards.findIndex((card) => card.id === cardId);
          if (cardIndex !== -1) {
            cardFound = lvl.cards[cardIndex];
            oldLevelIndex = index;
            const newCards = [...lvl.cards];
            newCards.splice(cardIndex, 1);
            return { ...lvl, cards: newCards };
          }
          return lvl;
        });

        if (cardFound !== null && oldLevelIndex !== null) {
          const currentLevelNumber = oldLevelIndex + 1;
          let newLevelNumber = currentLevelNumber + 2;
          if (newLevelNumber > theme.levels.length) {
            newLevelNumber = theme.levels.length;
          }
          const interval = getInterval(newLevelNumber);
          const nextReviewDate = addDays(new Date(), interval);
          cardFound = { ...cardFound, level: newLevelNumber, nextReviewDate };

          const targetIndex = newLevelNumber - 1;
          newLevels[targetIndex].cards = [...newLevels[targetIndex].cards, cardFound];
        }
        return { ...theme, levels: newLevels };
      })
    );
  };

  const wrongAnswer = (cardId) => {
    setThemes((prevThemes) =>
      prevThemes.map((theme) => {
        let cardFound = null;
        let oldLevelIndex = null;
        const newLevels = theme.levels.map((lvl, index) => {
          const cardIndex = lvl.cards.findIndex((card) => card.id === cardId);
          if (cardIndex !== -1) {
            cardFound = lvl.cards[cardIndex];
            oldLevelIndex = index;
            const newCards = [...lvl.cards];
            newCards.splice(cardIndex, 1);
            return { ...lvl, cards: newCards };
          }
          return lvl;
        });

        if (cardFound !== null && oldLevelIndex !== null) {
          const currentLevelNumber = oldLevelIndex + 1;
          let newLevelNumber = currentLevelNumber - 1;
          if (newLevelNumber < 1) newLevelNumber = 1;
          const interval = getInterval(newLevelNumber);
          const nextReviewDate = addDays(new Date(), interval);
          cardFound = { ...cardFound, level: newLevelNumber, nextReviewDate };

          const targetIndex = newLevelNumber - 1;
          newLevels[targetIndex].cards = [...newLevels[targetIndex].cards, cardFound];
        }
        return { ...theme, levels: newLevels };
      })
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
        addCategory,
        addCardToLevel,
        correctAnswer,
        wrongAnswer,
        startReview,
        addDays,
        getInterval,
      }}
    >
      {children}
    </LeitnerContext.Provider>
  );
}

export default LeitnerProvider;
