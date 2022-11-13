import React from 'react'
import {useParams} from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDis.css';

function ProjectDis() {
    const {id}=useParams
    const project = ProjectList[id];
  return (
    <div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image}/>
    <link href={project.Github}/>
    <link href={project.Deployed}/>
    </div>
  )
}

export default ProjectDis