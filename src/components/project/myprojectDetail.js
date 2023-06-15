import React, { useState } from "react";
import "./myprojectDetail.css";

const MyprojectDetail = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="project"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project-description">
            <h2 className="heading">{title}</h2>
            <p>{desc}</p>
          </div>
        ) : (
          <div>
            <img className="project-img" src={img} alt="project" />
          </div>
        )}
      </div>
    </a>
  );
};

export default MyprojectDetail;
