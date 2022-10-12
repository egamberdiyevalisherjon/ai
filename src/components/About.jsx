import React from "react";

const About = () => {
  return (
    <section id="about">
      <h5>About us</h5>
      <h2>Global technologies</h2>
      <div className="container">
        <div className="flex align-center">
          <div className="portion">
            <img src="/images/chart.png" alt="chart" />
          </div>
          <div className="portion flex justify-center">
            <div>
              <h3>Level 1</h3>
              <ul>
                <li className="flex align-start">
                  <img src="/icons/marker-blue.svg" alt="marker" />
                  <span>
                    Deploy a multi-legged futures strategy by simultaneously
                    placing orders to buy and sell from the same order ticket.
                  </span>
                </li>
                <li className="flex align-start">
                  <img src="/icons/marker-red.svg" alt="marker" />
                  <span>
                    Place and manage orders based on the Level 2 order book,
                    which provides a live display of all bids and offers waiting
                    to be executed.
                  </span>
                </li>
              </ul>
              <a href="#" className="main-btn">
                start now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
