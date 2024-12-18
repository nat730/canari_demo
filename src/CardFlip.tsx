import React, { useState } from "react";
import "./CardFlip.css"; // Importation des styles

// Type pour les cartes
type Card = {
  video: string;
  image: string;
};

const CardFlipPage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleValidate = (): void => {
    setIsFlipped(true);
  };

  const cards: Card[] = [
    {
      video: "/video1.mp4", // Assurez-vous que les vidéos sont dans /public
      image: "/image1.jpg", // Idem pour les images
    },
    {
      video: "/video2.mp4",
      image: "/image2.jpg",
    },
    {
      video: "/video3.mp4",
      image: "/image3.jpg",
    },
  ];

  return (
    <div className="page-container">
      <div className="card-container">
        {cards.map((card, index) => (
          <div className={`card ${isFlipped ? "flipped" : ""}`} key={index}>
            <div className="card-front">
              <video
                src={card.video}
                autoPlay
                loop
                muted
                className="card-video"
              />
            </div>
            <div className="card-back">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="card-image"
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
