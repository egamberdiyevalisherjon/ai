import React from "react";

const Cards = () => {
  return (
    <section id="cards">
      <div className="container">
        <div className="wrapper">
          <article className="card">
            <div>
              <h5>Spot & Margin</h5>
              <h2>
                Trade <span className="gradient">200+</span> <br />  pairs with up <br /> to
                10x leverage
              </h2>
              <a href="#">Learn more</a>
            </div>
          </article>
          <article className="card">
            <div>
              <h5>Derivatives</h5>
              <h2>40+ quarterly futures and contracts</h2>
              <a href="#">Learn more</a>
            </div>
          </article>
          <article className="card">
            <div>
              <h5>Trading Arena</h5>
              <h2>Prize pools worth up to <br /> USD 1,000,000</h2>
              <a href="#">Learn more</a>
            </div>
          </article>
          <article className="card">
            <div>
              <h5>mobile app</h5>
              <h2>Trade anytime,<br /> anywhere</h2>
              <a href="#">Learn more</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Cards;
