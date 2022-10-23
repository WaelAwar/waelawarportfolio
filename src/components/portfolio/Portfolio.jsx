import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A blog site with unique design and animations using Motion Framer.",
    github: "https://github.com",
    demo: "https://cvwael.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive Website using vanilla Javascript, HTML and CSS.",
    github: "https://github.com/WaelAwar/responsive-wbsite",
    demo: "https://waelawar.github.io/responsive-wbsite/index.html",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "A Facebook Clone, done with MERN stack, with features like user email verification, friend requests, wall posting, commenting, liking and reactions. {{60% done}}",
    github: "https://github.com",
    demo: "https://facebook.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
