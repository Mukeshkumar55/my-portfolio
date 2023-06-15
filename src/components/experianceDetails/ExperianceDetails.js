import React from "react";
import "./experiancedetail.css";

const ExperianceDetails = ({ number, title, style }) => {
  return (
    <div style={{ ...style }} className="experiance">
      <h2 className="heading1">{number}</h2>
      <h3 className="description">{title}</h3>
    </div>
  );
};

export default ExperianceDetails;
