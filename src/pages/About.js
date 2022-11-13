import React from 'react';
import '../styles/Home.css';


export default function  About() {
    return (
<div className='skills'>
<h1> Skills</h1>
<ul className='list'>
  <li className='item'>
  <h2>Front-End</h2>
  <span> React, CSS, HTML, BootStrap</span>
  </li>
  <li className='item'></li>
  <h2>Back-End</h2>
  <span> NodeJs, ExpressJS,MySQL, MongoDb, GraphQl, ApolloServer</span>
  <li className='item'></li>
  <h2>Languages</h2>
  <span> JavaScript</span>
</ul>
</div>
);
};