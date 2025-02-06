import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";

const Nav = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        // Hide when scrolled past 10px
        if (window.scrollY > 10) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className="flex justify-between items-center mt-5 mb-10 w-full h-[120px] ">
      <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000`}>
        <Link to={"/"}>
        <Loader></Loader>
        </Link>
      </div>
      <div className="flex gap-5 justify-between bg-cyan-300/30 backdrop-blur-xs text-lg text-emerald-300 font-semibold h-[100px] items-center w-[60%] px-20 rounded-b-[200px] rounded-t-[500px] ">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-navlink" : ""
          }
        >
          About
        </NavLink>
        <NavLink to="/skills"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-navlink" : ""
          }>Skills</NavLink>
        <NavLink to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-navlink" : ""
          }>Projects</NavLink>
        <NavLink to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-navlink" : ""
          }>Contact</NavLink>
      </div>
      <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000`}>
        <button className="text-navtext font-bold border-2 py-4 px-8 hover:bg-cyan-300/30">Download Resume</button>
      </div>
    </div>
  );
};

export default Nav;
