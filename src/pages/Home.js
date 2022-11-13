import React from 'react';
import '../styles/Home.css';

export default function  Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Tara.</h2>
        <div className='info'>
          <p>I am a software engineer who loves to learn and create.</p>
        </div>
        </div>
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
      </div>
      
   
  );
}
