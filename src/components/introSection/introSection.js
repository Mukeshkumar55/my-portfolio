import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import "./introSection.css";
import myresume from "../../components/introSection/image/Resume.pdf";

const IntroSection = () => {
  return (
    <Element name="home">
      <section className="section-introduction">
        <div className="introduction">
          <div className="hero">
            <p className="description">A Professional Web Developer</p>
            <h1 className="heading-primary">Mr.Mukeshkumar</h1>
            <p className="description">
              There wasn't a bird in the sky, but that was not what caught his
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these.He knew what was coming and he
              hoped he was prepared.
            </p>
            <div className="intro-btn">
              <a
                className="btn btn--full margin-right-sm"
                href={myresume}
                download="resume_download"
              >
                Download Cv
              </a>

              <Link
                className="nav-link"
                to="project"
                smooth={true}
                duration={500}
              >
                <a className="btn btn--outline" href="#" id="project">
                  My Work
                </a>
              </Link>
            </div>
          </div>

          <div className="my-image">
            <img></img>
            {/* <img
              className="mukesh-img"
              src="/src/components/introSection/image/mukeshkumar.jpg"
            ></img> */}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default IntroSection;
