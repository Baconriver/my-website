import "./Experience.css";
const Icon = ({ iconLink, alt }) => {
  return (
    <div>
      <img
        src={iconLink}
        alt={alt}
        className="vertical-timeline-element-icon"
      ></img>
    </div>
  );
};

export default Icon;
