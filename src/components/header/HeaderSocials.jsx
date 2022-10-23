import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/wael-el-aawar-2767b0104/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/WaelAwar" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/El.Aawar/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
