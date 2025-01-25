import React from "react";

interface CardData {
  number: string;
  title: string;
  description: string;
  link: string;
  previewColor: string;
}

interface AboutCardsProps {
  cards: CardData[];
}

const AboutCards: React.FC<AboutCardsProps> = ({ cards }) => {
  return (
    <div className="container items-center justify-center grid grid-cols-1 gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div
            className="preview flex flex-col justify-center items-center"
            style={{ backgroundColor: card.previewColor }}
          >
            <h4>{card.title}</h4>
          </div>
          <div className="content">
            <div>
              <h2>{card.number}</h2>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link}>Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
