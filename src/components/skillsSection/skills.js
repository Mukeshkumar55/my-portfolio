import React from "react";
import prog from "../image/prog.jpg";
import { LinearProgress } from "@mui/material";
import { Element } from "react-scroll";
import "./skills.css";
const Skills = () => {
  return (
    <Element id="skills">
      <div className="skill-Section grid">
        <div className="Working-img">
          <img className="coding-img" src={prog} alt="workingimage" />
        </div>
        <div className="skillsKnown">
          <h2 className="heading-secondary">SkillSet</h2>
          <div className="skillSlider-Container">
            <h5 className="heading-tertiary">React Js</h5>
            <div className="skillSlider slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillSlider-Container">
            <h5 className="heading-tertiary">Java Script</h5>
            <div className="skillSlider slider2">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>

          <div className="skillSlider-Container">
            <h5 className="heading-tertiary">Css</h5>
            <div className="skillSlider slider3">
              <LinearProgress variant="determinate" value={70} />
            </div>
          </div>

          <div className="skillSlider-Container">
            <h5 className="heading-tertiary">Html</h5>
            <div className="skillSlider slider4">
              <LinearProgress variant="determinate" value={60} />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
