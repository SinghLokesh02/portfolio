import React, { useEffect } from "react";
import Typed from "typed.js";
import hero from "../assets/img/kuldeep-mishra.png";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["MERN Stack Developer,"],
      typeSpeed: 100,
      loop: true,
    };
    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative my-5">
      <div
        id="hero"
        className="hero route bg-image h-[100vh]"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title text-white text-3xl md:text-6xl absolute top-[50%] left-0 w-full text-center font-serif"  >
                I am Kuldeep Mishra
              </h1>
              <p className="hero-subtitle">
                <span className="typed text-white md:text-6xl text-4xl absolute top-[55%] md:top-[60%] left-0 w-full text-center font-serif" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
