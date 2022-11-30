import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, title, id, Deployed}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {title} </h1>
      <p>{Deployed}</p>
    </div>
  );
}

export default ProjectItem;