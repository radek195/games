import React from "react";
import "./style/Hero.scss";
import Button from "./Button";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <header className="hero__header">
        <h1 className="hero__maintitle hero__title">Gamebrary</h1>
        <h2 className="hero__subtitle hero__title">Best video game browser!</h2>
      </header>
      <div className="hero__btn">
        <Link
          to={"about"}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          delay={300}
          offset={-100}
        >
          <Button text="Learn more" handleClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
