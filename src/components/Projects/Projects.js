// Import Assets
import logo from "../../assets/logo192.png";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-cards">
        <div className="projects-card">
          <h3>My Website</h3>
          <img src={logo} alt="Uniswap Swap Page" />
          <p>
            This is my personal website. A place to showcase my experience and
            my projects.
          </p>
          <div className="projects-card-buttons">
            <a
              href="https://henryj.link/"
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              Site
            </a>
            <a
              href="https://github.com/Baconriver/my-website"
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projects-card">
          <h3>AreaSnap.com</h3>
          <img src={logo} alt="Compound Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>
          <div className="projects-card-buttons">
            <a href="" target="_blank" className="button" rel="noreferrer">
              Site
            </a>
          </div>
        </div>
        <div className="projects-card">
          <h3>My Shop</h3>
          <img src={logo} alt="Aave Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>
          <div className="projects-card-buttons">
            <a href="" target="_blank" className="button" rel="noreferrer">
              Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
