import Header from "./components/header/header";
import IntroSection from "./components/introSection/introSection";
import Skills from "./components/skillsSection/skills";
import Project from "./components/project/project";
import Experiance from "./components/experiance/experiance";
import Contact from "./components/contact/contact";
import "./mediaQuary.css";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <Skills />
      <Project />
      <Experiance />
      <Contact />
    </div>
  );
}

export default App;
