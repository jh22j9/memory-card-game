import "./App.css";

function App() {
  const images = ["01", "02", "03", "04", "05", "06"].map(
    (el) => `img/${el}.png`
  );

  const pairOfCards = [...images, ...images];

  return (
    <section className="memory-game">
      {pairOfCards.map((image, index) => {
        return (
          <div className="memory-card" key={index}>
            <img className="front-face" src={image} alt={index} />
            <h3 className="back-face">Click!</h3>
          </div>
        );
      })}
    </section>
  );
}

export default App;
