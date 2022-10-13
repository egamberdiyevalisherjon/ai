import React from "react";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="container">
        <div className="flex">
          <div className="portion">
            <h5>crypto trading</h5>
            <h1>
              Engineers Meet
              <span className="blue-gradient"> Traders _</span>
            </h1>
            <p>
              Advanced crypto algorithmic trading and efficient cross-chain
              execution, at scale.
            </p>
          </div>
          <div className="portion">
            <img
              src="/images/process.png"
              alt="Process"
              className="showcase-image"
            />
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="main-btn">
            learn more{" "}
            <span className="arrow-wrapper">
              <img src="/icons/arrow-down.svg" alt="down arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
