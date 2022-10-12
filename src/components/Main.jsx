import React from "react";
import About from "./About";
import Cards from "./Cards";
import Platform from "./Platform";

const Main = () => {
  return (
    <main id="main-area">
      <div className="text-center">
        <img src="/icons/mouse.svg" alt="Mouse scroll" />
      </div>
      <About />
      <Platform />
      <Cards />
    </main>
  );
};

export default Main;
