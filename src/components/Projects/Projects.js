// Import Assets
import logo from "../../assets/logo192.png";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>My Personal Website</h3>
          <img src={logo} alt="Uniswap Swap Page" />
          <p className="text-3xl font-bold underline">
            This is my personal website. I put some effort into here to showcase
            my career and my projects. The website hosted on fleek.co and AWS.
            Hope you like it.
          </p>

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

        <div className="projects__card">
          <h3>Compound</h3>
          <img src={logo} alt="Compound Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://compound.finance/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href="https://github.com/compound-finance/compound-protocol"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Aave</h3>
          <img src={logo} alt="Aave Landing Page" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://aave.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href="https://github.com/aave/aave-v3-core"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
