import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [user, setUser] = useState({ name: "" });

  const ktcnel = () => {};

  console.log({ user });

  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button
          className="btns"
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
          onClick={ktcnel}
        >
          GET STARTED
        </button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
