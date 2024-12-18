import React, { useState } from "react";

type Card = {
  video: string;
  image: string;
};

const CardFlipPage: React.FC = () => {
  const [flippedStates, setFlippedStates] = useState<boolean[]>([false, false, false]);

  const toggleCard = (index: number): void => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleValidate = (): void => {
    setFlippedStates((prev) => prev.map((state) => !state));
  };

  const cards: Card[] = [
    {
      video: "/videos/video1.mp4",
      image: "/image/image1.jpg",
    },
    {
      video: "/videos/video2.mp4",
      image: "/image/image2.jpg",
    },
    {
      video: "/videos/video3.mp4",
      image: "/image/image3.jpg",
    },
  ];

  return (
    <div className="page-container">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`card ${flippedStates[index] ? "flipped" : ""}`}
            key={index}
            onClick={() => toggleCard(index)}
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
