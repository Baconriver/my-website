import selfie from "../../assets/selfie.jpg";
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
        <img src={selfie} alt="selfie" className="selfie"></img>
      </div>
    </section>
  );
};

export default About;
