import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./styles.scss";
const data = {
  experience: [
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ],
  education: [
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      title: "Creative Director",
      subTitle: "Miami, FL",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ],
};

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie color="white" size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline layout="1-column" lineColor="#ffdd40">
              {data.experience.map((item) => (
                <VerticalTimelineElement
                  key={item.title}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border : '1.5px solid #ffdd40'
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2011 - present"
                  iconStyle={{ background: "#181818", color: "#ffdd40" }}
                  icon={<MdWork />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column"  lineColor="#ffdd40">
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                    background: "none",
                    color: "#fff",
                    border : '1.5px solid #ffdd40'
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2011 - present"
                iconStyle={{ background: "#181818", color: "#ffdd40" }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.subTitle}
                </h4>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
