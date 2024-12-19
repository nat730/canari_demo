import React, { useState } from "react";
import "./CardFlip.css";

type Card = {
  video: string;
  image: string;
};

const CardFlipPage: React.FC = () => {
  const [flippedStates, setFlippedStates] = useState<boolean[]>([false, false, false]);
  const [cards, setCards] = useState<Card[]>([
    {
      video: "/video/video1.mp4",
      image: "/image/image1.jpg",
    },
    {
      video: "/video/video2.mp4",
      image: "/image/image2.jpg",
    },
    {
      video: "/video/video3.mp4",
      image: "/image/image3.jpg",
    },
  ]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleValidate = (): void => {
    // Retourner toutes les cartes lors du clic sur "Valider"
    setFlippedStates((prev) => prev.map((state) => !state));
  };

  const handleCardClick = (index: number) => {
    if (selectedCardIndex === null) {
      // Sélectionner la première carte
      setSelectedCardIndex(index);
    } else {
      // Échanger les deux cartes
      const newCards = [...cards];
      [newCards[selectedCardIndex], newCards[index]] = [
        newCards[index],
        newCards[selectedCardIndex],
      ];
      setCards(newCards);
      setSelectedCardIndex(null); // Réinitialisation de la sélection
    }
  };

  return (
    <div className="page-container">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`card ${flippedStates[index] ? "flipped" : ""} ${
              selectedCardIndex === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="card-image"
              />
            </div>
            <div className="card-back">
              <video
                src={card.video}
                autoPlay
                loop
                muted
                className="card-video"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="validate-button" onClick={handleValidate}>
        Valider
      </button>
    </div>
  );
};

export default CardFlipPage;
