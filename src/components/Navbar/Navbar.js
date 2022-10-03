import "./Navbar.css";
const Navbar = () => {
  function scrollTo(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-myname" onClick={() => scrollTo("navbar")}>
        Henry Jiang
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
        {/* <div className="navbar-socials-button" onClick={scrollTo("cool-stuff")}>
          Cool stuff
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
