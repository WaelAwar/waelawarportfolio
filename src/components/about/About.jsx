import React from "react";
import "./about.css";
import AMS from "../../assets/ams.svg";
import { FaAward } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AMS} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Web Developer</h5>
              <small>Self-Taught & Freelancing 1+ years</small>
            </article>

            <article className="about__card">
              <FaBusinessTime className="about__icon" />
              <h5>Business Manager</h5>
              <small>Founder & CEO of DRAGONWAY</small>
            </article>

            <article className="about__card">
              <MdEngineering className="about__icon" />
              <h5>Civil Engineer</h5>
              <small>Bachelor's in Civil Engineering technology</small>
            </article>
          </div>

          <p>
            <q>
              Hello World! I'm Wael El Aawar, a web developer based in Richmond,
              Virginia. With a degree in civil engineering technology, my life
              has always been focused around logic and problem-solving, which
              has benefited me heaply in programming. My current web developing
              skills revolve around the MERN stack, but I never shy away from
              learning new languages.
            </q>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
