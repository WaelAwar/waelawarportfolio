import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useScrollWidth } from "../../hooks/useScrollWidth";

const Nav = () => {
  const scrollPosition = useScrollPosition();
  const scrollWidth = useScrollWidth();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav>
      <a
        href="#home"
        className={classNames(
          scrollWidth > 1024 && scrollPosition < 370 && scrollPosition >= 0
            ? "active"
            : scrollWidth > 600 &&
              scrollWidth <= 1024 &&
              scrollPosition < 570 &&
              scrollPosition >= 0
            ? "active"
            : scrollWidth <= 600 && scrollPosition < 412 && scrollPosition >= 0
            ? "active"
            : ""
        )}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={classNames(
          scrollWidth > 1024 && scrollPosition < 1216 && scrollPosition >= 450
            ? "active"
            : scrollWidth > 600 &&
              scrollWidth <= 1024 &&
              scrollPosition < 1550 &&
              scrollPosition >= 570
            ? "active"
            : scrollWidth <= 600 &&
              scrollPosition < 1617 &&
              scrollPosition >= 413.5
            ? "active"
            : ""
        )}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={classNames(
          scrollWidth > 1024 && scrollPosition < 1939 && scrollPosition >= 1224
            ? "active"
            : scrollWidth > 600 &&
              scrollWidth <= 1024 &&
              scrollPosition < 2680 &&
              scrollPosition >= 1550
            ? "active"
            : scrollWidth <= 600 &&
              scrollPosition < 2645 &&
              scrollPosition >= 1617
            ? "active"
            : ""
        )}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={classNames(
          scrollWidth > 1024 && scrollPosition < 3520 && scrollPosition >= 1990
            ? "active"
            : scrollWidth > 600 &&
              scrollWidth <= 1024 &&
              scrollPosition < 4766 &&
              scrollPosition >= 2680
            ? "active"
            : scrollWidth <= 600 &&
              scrollPosition < 5735 &&
              scrollPosition >= 2645
            ? "active"
            : ""
        )}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={classNames(
          scrollWidth > 1024 && scrollPosition >= 3550
            ? "active"
            : scrollWidth > 600 && scrollWidth <= 1024 && scrollPosition >= 4766
            ? "active"
            : scrollWidth <= 600 && scrollPosition >= 5735
            ? "active"
            : ""
        )}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
