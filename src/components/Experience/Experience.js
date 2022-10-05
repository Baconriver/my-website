import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>

      <ul>
        <li>
          <i>Honeywell</i> - <strong>Software Engineer</strong>, Jul
          2021-Present
          <ul>
            <li>
              Design, develop, and maintain Honeywell Sine's automation
              framework (TS/JS, React, node.js, Python, Postgres, Docker)
            </li>
          </ul>
        </li>
        <li>
          <i>Adelaide MRI</i> - <strong>Software Engineer</strong>, May 2019-Jul
          2021
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
        </li>
        <li>
          <i>Opentute</i> - <strong>Full Stack Developer</strong>, Jan 2018-May
          2019
          <ul>
            <li>
              Opentute: A socialized learning online platform (Angular,
              Bootstrap, Node.js, Postgres)
            </li>
          </ul>
        </li>
        <li>
          <i>University of Adelaide</i> -{" "}
          <strong>Master of Software Engineering</strong>, Jul 2015-Dec 2017
        </li>
      </ul>
    </div>
  );
};

export default Experience;
