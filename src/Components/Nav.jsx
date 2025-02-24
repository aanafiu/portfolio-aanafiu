import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setIsVisible(false); // Scrolling down, hide nav
      } else {
        setIsVisible(true); // Scrolling up, show nav
      }
      setPrevScrollY(window.scrollY); // Update the previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]); // Dependency array to ensure the scroll position is updated correctly

  const scrollOffset = -130;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-5 mb-10 w-full h-[120px]">
      {/* Logo */}
      <div
        className={`w-full ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 flex justify-center items-center`}
      >
        <Link to="/">
          <Loader />
        </Link>
      </div>

      {/* Mobile Menu Hamburger Icon */}
      <div className="sm:hidden w-full flex justify-end items-start py-4 px-5">
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-cyan-500 font-semibold text-4xl"
        >
          {isMenuOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-5 justify-between bg-cyan-300/30 backdrop-blur-xs text-lg text-emerald-300 font-semibold h-[100px] items-center w-full px-20 rounded-b-[200px] rounded-t-[500px]">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={scrollOffset}
          className="cursor-pointer hover:text-green-400 transition"
        >
          About
        </ScrollLink>

        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={scrollOffset}
          className="cursor-pointer hover:text-green-400 transition"
        >
          Skills
        </ScrollLink>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={scrollOffset}
          className="cursor-pointer hover:text-green-400 transition"
        >
          Projects
        </ScrollLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={scrollOffset}
          className="cursor-pointer hover:text-green-400 transition"
        >
          Contact
        </ScrollLink>
      </div>

      {/* Download Resume Button (Desktop) */}
      <div
        className={`w-full text-right ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 hidden sm:block`}
      >
        <a
          className="text-navtext font-bold border-2 py-4 px-8 hover:bg-cyan-300/30"
          href="../../assets/Resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="sm:hidden w-full flex flex-col bg-black/80 text-navtext text-2xl gap-5 my-4">
          <div className="flex flex-col gap-4 items-center">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="cursor-pointer hover:text-green-400 transition"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="cursor-pointer hover:text-green-400 transition"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="cursor-pointer hover:text-green-400 transition"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="cursor-pointer hover:text-green-400 transition"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Download Resume Button (Mobile) */}
          <a
            className="text-navtext font-bold border-2 py-4 px-8 hover:bg-cyan-300/30 mt-4 z-50"
            href="../assets/Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
