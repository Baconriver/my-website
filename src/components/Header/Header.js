import "./Header.css";
const Header = () => {
  function scrollTo(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="header-section">
      <div className="header-content" onClick={() => scrollTo("about")}>
        <h1>Hi, I'm Henry Jiang</h1>
      </div>
    </section>
  );
};

export default Header;
