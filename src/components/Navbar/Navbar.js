import "./Navbar.css";
import henryjLogo from "../../assets/henryj-logo.png";
const Navbar = () => {
  function scrollTo(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
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

        <div
          className="navbar-socials-button"
          onClick={() => scrollTo("socials")}
        >
          Socials
        </div>
        <div
          className="navbar-socials-button"
          onClick={() => scrollTo("contact")}
        >
          Contact me
        </div>
      </div>
    </div>
  );
};

export default Navbar;
