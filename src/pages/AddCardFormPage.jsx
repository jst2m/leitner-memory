// src/pages/AddCardFormPage.jsx
import React, { useState, useContext } from "react";
import { LeitnerContext } from "../context/LeitnerContext";

export default function AddCardFormPage({ themeId, levelId, onClose }) {
  const { addCardToLevel } = useContext(LeitnerContext);

  const [frontType, setFrontType] = useState("text");
  const [frontText, setFrontText] = useState("");
  const [frontFile, setFrontFile] = useState(null);
  const [frontUrl, setFrontUrl] = useState("");

  const [backType, setBackType] = useState("text");
  const [backText, setBackText] = useState("");
  const [backFile, setBackFile] = useState(null);
  const [backUrl, setBackUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let frontContent = null;
    if (frontType === "text") {
      if (!frontText) return;
      frontContent = { type: "text", content: frontText };
    } else {
      if (frontFile) {
        frontContent = { type: "image", content: frontFile.name };
      } else if (frontUrl) {
        frontContent = { type: "image", content: frontUrl };
      } else {
        return;
      }
    }

    let backContent = null;
    if (backType === "text") {
      if (!backText) return;
      backContent = { type: "text", content: backText };
    } else {
      if (backFile) {
        backContent = { type: "image", content: backFile.name };
      } else if (backUrl) {
        backContent = { type: "image", content: backUrl };
      } else {
        return;
      }
    }

    addCardToLevel(themeId, levelId, frontContent, backContent);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Ajouter une nouvelle carte</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Contenu Recto</label>
        <select
          value={frontType}
          onChange={(e) => setFrontType(e.target.value)}
          className="w-full p-1 text-black"
        >
          <option value="text">Texte</option>
          <option value="media">Multimédia</option>
        </select>
        {frontType === "text" ? (
          <input
            type="text"
            value={frontText}
            onChange={(e) => setFrontText(e.target.value)}
            placeholder="Entrez le texte du recto"
            className="w-full p-1 mt-2 text-black"
          />
        ) : (
          <div className="mt-2 space-y-2">
            <label className="block text-sm">Upload d'image</label>
            <input
              type="file"
              onChange={(e) => setFrontFile(e.target.files[0])}
              className="w-full"
            />
            <label className="block text-sm">Ou via URL</label>
            <input
              type="text"
              value={frontUrl}
              onChange={(e) => setFrontUrl(e.target.value)}
              placeholder="Entrez l'URL de l'image"
              className="w-full p-1 text-black"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Contenu Verso</label>
        <select
          value={backType}
          onChange={(e) => setBackType(e.target.value)}
          className="w-full p-1 text-black"
        >
          <option value="text">Texte</option>
          <option value="media">Multimédia</option>
        </select>
        {backType === "text" ? (
          <input
            type="text"
            value={backText}
            onChange={(e) => setBackText(e.target.value)}
            placeholder="Entrez le texte du verso"
            className="w-full p-1 mt-2 text-black"
          />
        ) : (
          <div className="mt-2 space-y-2">
            <label className="block text-sm">Upload d'image</label>
            <input
              type="file"
              onChange={(e) => setBackFile(e.target.files[0])}
              className="w-full"
            />
            <label className="block text-sm">Ou via URL</label>
            <input
              type="text"
              value={backUrl}
              onChange={(e) => setBackUrl(e.target.value)}
              placeholder="Entrez l'URL de l'image"
              className="w-full p-1 text-black"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-purple-600 px-3 py-2 rounded">
          Ajouter la carte
        </button>
        <button onClick={onClose} type="button" className="ml-2 text-gray-300">
          Annuler
        </button>
      </div>
    </form>
  );
}
