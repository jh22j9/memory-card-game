import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [flippedCard, setFlippedCard] = useState([]);
  // const [matched, setMatched] = useState([]);
  const [matchedId, setMatchedId] = useState("");

  const images = ["01", "02", "03", "04", "05", "06"].map((el, index) => ({
    id: index,
    src: `img/${el}.png`,
  }));

  const pairOfCards = [...images, ...images];

  const flipCard = (index) => {
    setFlippedCard((flipped) => [...flipped, index]);
  };

  useEffect(() => {
    const first = pairOfCards[flippedCard[0]];
    const second = pairOfCards[flippedCard[1]];

    if (second && first.id === second.id) {
      // setMatched([...matched, first.id]);
      setMatchedId(first.id);
    }

    if (flippedCard.length === 2) {
      setTimeout(() => setFlippedCard([]), 1000);
    }
  }, [flippedCard]);

  return (
    <section className="memory-game">
      {pairOfCards.map((image, index) => {
        let isFlipped = false;

        if (flippedCard.includes(index)) isFlipped = true;
        {
          /* if (matched.includes(image.id)) isFlipped = true; */
        }
        if (matchedId === image.id) isFlipped = true;

        return (
          <div
            className={`memory-card ${isFlipped ? "flipped" : ""}`}
            key={index}
            onClick={() => flipCard(index)}
          >
            <img className="front-face" src={image.src} alt={image.id} />
            <h3 className="back-face">Click!</h3>
          </div>
        );
      })}
    </section>
  );
}

export default App;
