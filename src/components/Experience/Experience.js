import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import honeywellIcon from "../../assets/Honeywell.jpg";
import adelaideMRIIcon from "../../assets/adelaideMRI.jpg";
import opentuteIcon from "../../assets/opentute.jpg";
import adelaideUniIcon from "../../assets/adelaideUni.jpg";
import hkbuIcon from "../../assets/hkbu.jpg";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work first-experience"
          contentStyle={{ background: "rgb(0 138 248)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(0 138 248)" }}
          date="Jul 2021 - present (1 yr 10 mos)"
          icon={<Icon iconLink={honeywellIcon} alt="Honeywell" />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer II
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Adelaide, AU</h4>
          <ul>
            <li>
              Design, develop, and maintain Honeywell Sine's automation
              framework (TS/JS, React, node.js, Python, Postgres, Docker)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(211 237 255)",
            color: "#0e7bd3",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(211 237 255)" }}
          date="May 2019 - Jul 2021 (2 yrs 3 mos)"
          icon={<Icon iconLink={adelaideMRIIcon} alt="AdelaideMRI" />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Adelaide, AU</h4>
          <ul>
            <li>
              RadReport: Adelaide MRI radiology reporting system (Angular,
              Bootstrap, Ngrx, rxjs, Flask python, Postgres)
            </li>
            <li>
              RadRes: Adelaide MRI booking system (React, Tailwind CSS, Redux,
              Flask python, Postgres)
            </li>
            <li>
              RadPay: Adelaide MRI payroll system (React, Tailwind CSS, GraphQL,
              Flask python, Postgres)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(211 237 255)", color: "#0e7bd3" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(211 237 255)" }}
          date="Jan 2018 - May2019 (1 yr 5 mos)"
          icon={<Icon iconLink={opentuteIcon} alt="Opentute" />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Adelaide, AU</h4>
          <ul>
            <li>
              Opentute: A socialized learning online platform (Angular,
              Bootstrap, Node.js, Postgres)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(211 237 255)", color: "#0e7bd3" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(211 237 255)" }}
          date="2015 - 2017 (2 yrs)"
          icon={
            <Icon iconLink={adelaideUniIcon} alt="The University of Adelaide" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Master of Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Adelaide, AU</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(211 237 255)", color: "#0e7bd3" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(211 237 255)" }}
          date="2011 - 2015 (4 yrs)"
          icon={<Icon iconLink={hkbuIcon} alt="Hong Kong Baptist University" />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hong Kong, CN</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBabyCarriage} />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
