import React from "react";
import { FaBlackTie } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from "rc-progress";
import "./styles.scss";
const data = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "95",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "90",
      },
      {
        skillName: "REACT JS",
        percentage: "90",
      },
      {
        skillName: "ANGULAR",
        percentage: "75",
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "95",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "90",
      },
      {
        skillName: "REACT JS",
        percentage: "90",
      },
      {
        skillName: "ANGULAR",
        percentage: "75",
      },
    ],
  },
  {
    label: "DATABASES",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "95",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "90",
      },
      {
        skillName: "REACT JS",
        percentage: "90",
      },
      {
        skillName: "ANGULAR",
        percentage: "75",
      },
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<FaBlackTie color="white" size={40} />}
      />
      <div className="skills__content-wrapper">
        {data.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>
            <div>
              {item.data.map((skill) => (
                <div className="progressbar-wrapper" key={skill.skillName}>
                  <p>{skill.skillName}</p>
                  <Line
                    percent={skill.percentage}
                    strokeWidth="2"
                    strokeColor="#ffdd40"
                    strokeLinecap="square"
                    trailWidth='2'
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
