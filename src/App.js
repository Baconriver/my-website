// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<About />
			<Projects />
			<Experience />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
