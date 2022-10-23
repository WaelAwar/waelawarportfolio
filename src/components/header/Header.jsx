import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import BT from "../../assets/technologies/bootstrap.svg";
import CS from "../../assets/technologies/css.svg";
import HT from "../../assets/technologies/html.svg";
import JS from "../../assets/technologies/js.svg";
import MN from "../../assets/technologies/mongo.svg";
import ND from "../../assets/technologies/node.svg";
import RT from "../../assets/technologies/react.svg";
import PY from "../../assets/technologies/python.svg";
import FG from "../../assets/technologies/figma.svg";
import RD from "../../assets/technologies/redux.svg";
import "regenerator-runtime/runtime";
import Typing from "react-typing-animation";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wael El Aawar</h1>

        <Typing className="loop" loop={true} speed={10}>
          <h5 className="text-light">
            <span>&lt;div&gt;</span> A Full-Stack Web Developer
            <span>&lt;/div&gt;</span>
          </h5>
          <Typing.Backspace delay={2000} count={50} />
        </Typing>

        <CTA />
        <HeaderSocial />
        <div className="wael">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <div className="techo">
            <div className="boot">
              <img src={BT} alt="me" />
            </div>
            <div className="css">
              <img src={CS} alt="me" />
            </div>
            <div className="html">
              <img src={HT} alt="me" />
            </div>
            <div className="js">
              <img src={JS} alt="me" />
            </div>
            <div className="mongo">
              <img src={MN} alt="me" />
            </div>
            <div className="node">
              <img src={ND} alt="me" />
            </div>
            <div className="python">
              <img src={PY} alt="me" />
            </div>
            <div className="react">
              <img src={RT} alt="me" />
            </div>
            <div className="figma">
              <img src={FG} alt="me" />
            </div>
            <div className="redux">
              <img src={RD} alt="me" />
            </div>
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
