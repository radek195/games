import React from "react";
import "./style/About.scss";
import playstation from "../assets/img/playstation.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <h3 className="about__title">
        <i className="far fa-lightbulb"></i> .about
      </h3>
      <div className="about__wrapper">
        <div className="about__description">
          <p className="about__text">
            Are you bored of your current game? Are you unsure of what game you
            want to spend money and time on? Maybe you are very specific Player
            with sophisticated taste?
          </p>
          <p className="about__text">
            It is your lucky day! With Gamebrary you will find the best game on
            the market. Search between different categories that we prepared for
            you, or use dice roll <i className="fas fa-dice"></i>!
          </p>
        </div>
        <img
          className="about__image"
          src={playstation}
          alt="player holding playstation controller"
        />
      </div>
    </section>
  );
};

export default About;
