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
    <div className="relative my-3">
      <div
        id="hero"
        className="hero route bg-image h-[100vh]"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title text-white text-3xl md:text-6xl absolute top-[40%] left-0 w-full text-center font-serif"  >
                I am Kuldeep Mishra
              </h1>
              <p className="hero-subtitle">
                <span className="typed text-white md:text-6xl text-4xl absolute top-[45%] md:top-[50%] left-0 w-full text-center font-serif" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
