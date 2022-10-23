import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Workplace</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>A good team player</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Always with a positive attitude</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Helping my colleagues when needed</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Can be relied on to make sound decisions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dedication and self-motivation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ability to work under pressure and meet deadlines</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Display a high degree of honesty, loyalty and integrity</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accept self-criticism and value feedback </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Always punctual and always on time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flexible schedule</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Experties</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building Web Applications using the latest technologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO-friendly sites and SEO Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create web pages based on a provided design specification</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Development and payment processing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CMS Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Update existing websites and enhance website functionality</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug and web application testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interpret client requirements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Liaise with cleints, partners and stakeholders</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in business management and running business
                operations
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Critical thinker and brainstormer</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good management and leadership skills</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Willingness and ability to adapt to the rapid business and
                organizational changes that accompany a high-growth environment
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ability to quickly create and apply ideas and solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to prioritise and organise own workload and ability to
                motivate self and work on own initiative
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ability to take on new tasks and technology quickly</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
