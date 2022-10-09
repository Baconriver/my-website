import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <div className="social" id="socials">
      <h2>Socials</h2>

      <a href="" className="button">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/hejianghenry/"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/Baconriver"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="" className="button">
        <FontAwesomeIcon icon={faFileLines} />
      </a>
    </div>
  );
};

export default Social;
