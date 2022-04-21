import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/home";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./helpers/particlesConfig";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Theme from "./components/Theme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const showParticles = location.pathname === "/";

  return (
    <div className="App">
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      )}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      <div className="App__main-content">
        <Theme/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
