import React from "react";
import { Link } from "react-scroll";
import "./header.css";
import { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [show, setShow] = useState(false);

  const Clickhere = () => {
    setShow(!show);
  };

  if (show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  // const [navShow, setnavShow]=useState(false)
  // const ClickMenu = () => {

  // };

  const navShow = useRef();

  useEffect(() => {
    console.log(navShow.current);
  });

  const ClickMenu = () => {
    navShow.current.classList.toggle("navmenubar");
  };

  return (
    <div className="header-section">
      <header className="header-container">
        <div className="menu">
          {/* <div className="overlay"></div> */}
          <MenuIcon onClick={ClickMenu}></MenuIcon>
        </div>
        <h2>
          <a href="#">
            <span className="logo">F</span>rontend{" "}
            <span className="logo">D</span>evelop<span>er</span>
          </a>
        </h2>

        <nav className="headerNav">
          <ul ref={navShow} className="headerNav-list">
            <li>
              <Link className="nav-link" to="home" smooth={true} duration={500}>
                <h4>Home</h4>
              </Link>
            </li>
            {/* <li>
              <Link
                className="nav-link"
                to="about-me"
                smooth={true}
                duration={500}
              >
                <h4>About me</h4>
              </Link>
            </li> */}
            <li>
              <Link
                className="nav-link"
                to="skills"
                smooth={true}
                duration={500}
              >
                <h4>Skills</h4>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="experience"
                smooth={true}
                duration={500}
              >
                <h4>Experience</h4>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="project"
                smooth={true}
                duration={500}
              >
                <h4>Projects</h4>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
              >
                <h4>Contact</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="header-btn" onClick={Clickhere}>
          About me
        </button>
        <div class="delivered-imgs">
          <img alt="mukeshkumar-image"></img>
        </div>
      </header>
      {show && (
        <div className="show">
          <div className="overlay"></div>
          <div className="aboutme">
            <h1 className="myname">MUKESHKUMAR S</h1>
            <p className="myself">
              I am a Frontend Developer, who has completed a course in FITA
              academy to reach my goal which is to become a frondend developer.I
              am hard working person and a quick learner. I am always interested
              in learning new technology trends and keep me updated. My strength
              is my never give up mindset. I can adapt to the new surrounding
              easily which makes me a good team member.I am very much excited to
              implement my technical skills and improve my knowledge.
            </p>
            <button className="close-btn" onClick={Clickhere}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
