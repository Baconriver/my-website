// Import Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Social from "./components/Social";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
