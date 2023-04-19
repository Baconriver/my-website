import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  function scrollTo(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="header-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        onClick={() => scrollTo("about")}
        className="header-content"
      >
        <h1>Hi, I'm Henry Jiang</h1>
      </motion.div>
    </section>
  );
};

export default Header;
