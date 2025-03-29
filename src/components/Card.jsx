// src/components/Card.jsx
import React, { useState } from "react";

function renderContent(content) {
  if (typeof content === "object" && content !== null) {
    if (content.type === "text") {
      return content.content;
    } else if (content.type === "image") {
      return (
        <img
          src={content.content}
          alt="Card media"
          className="max-h-full object-contain"
        />
      );
    }
  }
  return content;
}

export default function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="w-full max-w-sm mx-auto h-48 md:h-40 border rounded p-4 flex flex-col items-center justify-center bg-gray-800 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <p className="text-white text-lg md:text-base">
        {flipped ? renderContent(back) : renderContent(front)}
      </p>
    </div>
  );
}
