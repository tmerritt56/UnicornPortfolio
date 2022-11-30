import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList';


function ProjectDis() {
  const {id} = useParams();
  const project = ProjectList[id];
  return (
    <div>Deployed Link:{project.Deployed}
    <img src={project.image}/>
    </div>
  )
}

export default ProjectDis