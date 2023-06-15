import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material";
import "./contact.css";

const Contact = () => {
  return (
    <Element id="contact">
      <div className="contact-section">
        <h2 className="heading-secondary ">Contact</h2>
        <div className="contact-info-box">
          <div className="contact-container">
            <p>
              Email:
              <span className="email">
                {" "}
                <a href="#" type="email">
                  s.mukeshkumar5594@gmail.com
                </a>
              </span>
            </p>
            <p>
              Github Username:<span className="git">@Mukeshkumar55</span>
            </p>
            <div className="contact-icon">
              <a href="#">
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </a>
              <a href="#">
                <IconButton>
                  <Instagram />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
