import React from "react";

const Platform = () => {
  return (
    <section id="platform">
      <div className="container">
        <div className="flex align-center">
          <div className="portion">
            <img className="track" src="/images/track.png" alt="" />
            <img className="track-sm" src="/images/track-sm.png" alt="" />
            <span className="ai">Artificial Intelligence</span>
            <span className="sn">Storage Networks</span>
            <span className="p2p">P2P Networks</span>
            <span className="pd">Public Data</span>
            <span className="epd">
              Encrypted Private <br /> Data *
            </span>
            <span className="ds">
              Easy to use digital service <br /> and exclusive personal <br />{" "}
              service for our active traders
            </span>
            <span className="in">Indexing</span>
            <span className="api">API</span>
            <span className="cs">Customer</span>
          </div>
          <div className="portion">
            <h2>
              The future <span className="grey">of</span> Cryptocurrency <br />
              trading
              <span className="gradient"> platform</span>
            </h2>
            <p>
              Take advantage of time and sales, futures spread orders and depth
              trader — plus, trade directly from charts.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
