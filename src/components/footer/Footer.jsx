import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Wael El Aawar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/El.Aawar/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/wallyalawar/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/wael-el-aawar-2767b0104/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wael El Aawar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
