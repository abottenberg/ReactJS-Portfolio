import React from 'react';
import About from './components/About';
import Background from './components/Background';
import Dropdown from './components/Dropdown';
import Projects from './components/Projects';
import Route from './components/Route';
import './styles/_app.scss';

export default () => {
  return (
    <div>
      <Background />
      <Dropdown />
      <Route path="/projects">
        <div className="projects-page-container">
          {/*<div className="empty"></div>*/}
          <Projects />
        </div>
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
};
