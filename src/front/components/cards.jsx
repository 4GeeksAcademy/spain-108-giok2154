import React from "react";

const cardsData = [
  { id: 1, title: "Card 1", text: "Texto de la card 1", img: "https://www.youtube.com/watch?v=IrUFd1DKeE8" },
  { id: 2, title: "Card 2", text: "Texto de la card 2", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Card 3", text: "Texto de la card 3", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Card 4", text: "Texto de la card 4", img: "https://via.placeholder.com/300x200" },
  { id: 5, title: "Card 5", text: "Texto de la card 5", img: "https://via.placeholder.com/300x200" },
  { id: 6, title: "Card 6", text: "Texto de la card 6", img: "https://via.placeholder.com/300x200" },
];

const Cards = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {cardsData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="card h-100 text-white border border-white" style={{ background: "transparent" }}>
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;