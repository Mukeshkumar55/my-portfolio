import React from "react";
import picture from "../image/snapshotimg.jpg";
import picture1 from "../image/expenseimg.jpg";
import picture2 from "../image/guess-my-number.jpg";
import { Element } from "react-scroll";
import "./project.css";
import MyprojectDetail from "./myprojectDetail";

const Project = () => {
  var arrobj = [
    {
      img: picture,
      title: "IMAGE GALLERY",
      link: "www.google.com",
      desc: "This is an image gallery which consists of search bar and button panel. In search bar, the user will be able to search for four categories such as mountain, beaches, birds and food. In the button panel there are four button with the name of above mention categories. The image gallery will be displayed according to the category entered in the search bar or the button click.",
    },
    {
      img: picture1,
      title: "EXPENSE TRACKER",
      link: "www.google.com",
      desc: "This is an Expense Calculator in which the balance amount will be displayed according to the amount entered by user. And the user will be able to credit or debit the amount from the displayed balance.As the user credits or debits the amount, the details of the transaction will be displayed with the time frame",
    },
    {
      img: picture2,
      title: "GUESS MY NUMBER",
      link: "www.google.com",
      desc: "This is an interesting game, the goal is to guess the hidden number which will change randomly in every new game. The players should enter the guesses, if the guessed number and hidden number are same the player will win the game and the high score will be displayed.Otherwise for every wrong guess he will lose 1 point from the total score 20 on reaching 0 the player will lose the game. ",
    },
  ];

  return (
    <Element name="project" className="section-project">
      <h2 className="heading-secondary">My Project</h2>
      <div className="project-container">
        {arrobj.map((val, index) => {
          return (
            <div className="projectDetail" id="myproject-details">
              {/* <img
                id="project-picture"
                className={val.desc}
                src={val.img}
                alt="projectimage"
              ></img> */}
              <MyprojectDetail
                key={index}
                desc={val.desc}
                img={val.img}
                title={val.title}
                link={val.link}
              />
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Project;
