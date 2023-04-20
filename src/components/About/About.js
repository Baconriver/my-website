import selfie from "../../assets/selfie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./About.css";
import BallCanvas from "./Ball";
import { skills } from "../../assets/constants";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-container-left">
          <p className="about-text">
            As a passionate Full Stack Developer, I bring 5 years of experience
            in web development. Skilled in handling tasks throughout the
            development process, I consistently deliver high-quality,
            user-friendly web experiences. Committed to staying current with
            industry trends, I excel in teamwork and communication, eagerly
            contributing to projects and turning innovative ideas into reality.
          </p>
          <div className="about-balls-container">
            {skills.map((skill) => (
              <div className="about-ball" key={skill.name}>
                <BallCanvas icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        <div className="about-flip-card">
          <div className="about-flip-card-inner">
            <motion.div
              className="about-flip-card-front"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img src={selfie} alt="selfie" className="selfie"></img>
            </motion.div>
            <div className="about-flip-card-back">
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.linkedin.com/in/hejianghenry/"
                className="about-flip-card-back-button"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://github.com/Baconriver"
                className="about-flip-card-back-button"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
