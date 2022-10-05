// Import Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Projects from "./components/Projects";
import Experience from "./components/Experience/Experience";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
