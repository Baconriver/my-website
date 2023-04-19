// Import Assets
import logo from "../../assets/logo192.png";
import "./Projects.css";
import { Tilt } from "react-tilt";

const Projects = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 45, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 450, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-cards">
        <Tilt options={defaultOptions} className="projects-card">
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
        </Tilt>

        <Tilt options={defaultOptions} className="projects-card">
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
        </Tilt>
        <Tilt options={defaultOptions} className="projects-card">
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
        </Tilt>
      </div>
    </section>
  );
};

export default Projects;
