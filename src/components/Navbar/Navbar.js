import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-myname">Henry Jiang</div>
      <div className="navbar-socials-container">
        <div className="navbar-socials-button">About me</div>
        <div className="navbar-socials-button">Experience</div>
        <div className="navbar-socials-button">Socials</div>
        <div className="navbar-socials-button">Cool stuff</div>
      </div>
    </div>
  );
};

export default Navbar;
