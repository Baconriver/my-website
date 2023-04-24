import "./Navbar.css";
import henryjLogo from "../../assets/henryj-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileNavMenu = ({ scrollTo }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <div className="mobile-navbar-menu">
        <motion.ul
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          transition={{ duration: 0.2 }}
        >
          <li
            className="navbar-socials-button"
            onClick={() => scrollTo("about")}
          >
            About me
          </li>
          <li
            className="navbar-socials-button"
            onClick={() => scrollTo("projects")}
          >
            My projects
          </li>
          <li
            className="navbar-socials-button"
            onClick={() => scrollTo("experience")}
          >
            Experience
          </li>
          <li
            className="navbar-socials-button"
            onClick={() => scrollTo("contact")}
          >
            Contact me
          </li>
        </motion.ul>
      </div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function scrollTo(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="navbar-myname" onClick={() => scrollTo("about")}>
          <img className="navbar-logo" src={henryjLogo} alt="HenryJ" />
        </div>
        <div className="navbar-socials-container">
          <div
            className="navbar-socials-button"
            onClick={() => scrollTo("about")}
          >
            About me
          </div>
          <div
            className="navbar-socials-button"
            onClick={() => scrollTo("projects")}
          >
            My projects
          </div>
          <div
            className="navbar-socials-button"
            onClick={() => scrollTo("experience")}
          >
            Experience
          </div>

          {/* <div
          className="navbar-socials-button"
          onClick={() => scrollTo("socials")}
        >
          Socials
        </div> */}
          <div
            className="navbar-socials-button"
            onClick={() => scrollTo("contact")}
          >
            Contact me
          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <div className="mobile-navbar-myname" onClick={() => scrollTo("about")}>
          <img className="mobile-navbar-logo" src={henryjLogo} alt="HenryJ" />
        </div>
        {!isMobileMenuOpen && (
          <span
            className="mobile-navbar-menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </span>
        )}

        {isMobileMenuOpen && (
          <span
            className="mobile-navbar-menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </span>
        )}
      </div>
      {isMobileMenuOpen && <MobileNavMenu scrollTo={scrollTo} />}
    </>
  );
};

export default Navbar;
