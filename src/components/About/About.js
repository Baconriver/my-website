import selfie from "../../assets/selfie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <p className="about-text">
          I'm a passionate full stack developer lives in the Great Adelaide
          Area. With nearly 5 years of full stack web development experience,
          I'm confident to handle any tasks during the whole web development
          process.
        </p>
        <div className="about-flip-card">
          <div className="about-flip-card-inner">
            <div className="about-flip-card-front">
              <img src={selfie} alt="selfie" className="selfie"></img>
            </div>
            <div className="about-flip-card-back">
              <div></div>
              <a
                href="https://www.linkedin.com/in/hejianghenry/"
                className="about-flip-card-back-button"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </a>
              <a
                href="https://github.com/Baconriver"
                className="about-flip-card-back-button"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
