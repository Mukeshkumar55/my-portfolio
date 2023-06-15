import { Element } from "react-scroll";
import "./experiance.css";
import ExperianceDetails from "../experianceDetails/ExperianceDetails";

const Experiance = () => {
  return (
    <Element className="experience-container" id="experience">
      <div className="section-experiance">
        <h2 className="heading-secondary">Experience</h2>
        <div className="exp-details">
          <ExperianceDetails
            number="3+"
            title="React Projects"
            style={{ backgroundColor: "#e67e22" }}
          />
          <ExperianceDetails number="Fresher" title="Frondend Developer" />
          <ExperianceDetails number="+5" title="Experience in civil" />
        </div>
      </div>
    </Element>
  );
};

export default Experiance;
