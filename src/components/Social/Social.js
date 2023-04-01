import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <div className="social" id="socials">
      <h2>Socials</h2>

      <a
        href="https://www.linkedin.com/in/hejianghenry/"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} /> Linkedin
      </a>
      <a
        href="https://github.com/Baconriver"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
      <a
        href="/src/assets/Henry_Jiang.pdf"
        download="Henry_Jiang.pdf"
        className="button"
      >
        <FontAwesomeIcon icon={faFileLines} /> Resume
      </a>
    </div>
  );
};

export default Social;
