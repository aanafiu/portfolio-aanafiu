import { useState, useEffect } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Education from "../Components/Education/Education";
import Nav from "../Components/Nav";
import Skills from "../Components/Skills/Skills";
import { FaArrowCircleUp } from "react-icons/fa";

import ParticlesBackground from "../Particles/ParticlesBackground";
import ProjectsSection from "../Components/Projects/ProjectsSection";
import Contact from "../Components/Contact/Contact";
import { BiCopyright } from "react-icons/bi";

const MainLayout = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Show the "Back to Top" button when the user scrolls 200px down
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="sticky top-5 container mx-auto z-50">
        <Nav />
      </div>

      {/* Apply Particles Effect Only to Banner */}
      <div className="relative my-10 min-h-screen">
        <ParticlesBackground>
          <div className="container mx-auto relative z-10">
            <Banner />
          </div>
        </ParticlesBackground>
      </div>

      {/* About Me */}
      <div id="about" className="text-navtext relative container mx-auto my-[120px]">
        <AboutMe />
      </div>

      {/* Skills */}
      <div id="skills" className="text-navtext relative container mx-auto my-[120px]">
        <Skills />
      </div>

      {/* Education */}
      <div id="education" className="text-navtext relative container mx-auto my-[120px]">
        <Education />
      </div>
      {/* Projects */}
      <div id="projects" className="text-navtext relative container mx-auto my-[120px]">
        <ProjectsSection/>
      </div>
      {/* Contact */}
      <div id="contact" className="text-navtext relative container mx-auto my-[120px]">
        <Contact></Contact>
      </div>
      {/* Footer */}
      <div id="contact" className="text-navtext text-center relative bg-cyan-800/80 py-5 mx-auto">
        <h1 className="text-xl flex justify-center items-center gap-2"><BiCopyright/>All Rights Reserved By Nafiu</h1>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="absolute md:fixed bottom-10 text-2xl right-10 bg-navtext/50 text-emerald-500 rounded-full p-5 shadow-lg hover:scale-105 hover:bg-cyan-700 transition"
        >
          <FaArrowCircleUp size={30} />
        </button>
      )}
    </>
  );
};

export default MainLayout;
