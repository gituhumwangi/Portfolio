import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
