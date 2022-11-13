import React from 'react';

function Projects(props){
    return (
        <div className="project card">
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <p className='title'>{props.name}</p>
            </div>
        </div>
    )
}
export default Projects;