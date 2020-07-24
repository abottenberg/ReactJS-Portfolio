import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring'
import {Spring} from 'react-spring/renderprops'
import menu from '../images/Menu.svg';
import projects from '../images/Projects.svg';
import about from '../images/About.svg';
import '../styles/_dropdown.scss';


const Dropdown = () => {
  const props = useSpring({ x: 100, from: { x: 0 } })
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      } setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };

  }, []);

  return (
    <div className="menu-container" ref={ref} >
      <div className="">
        <Spring
          native
          reset
          delay={1000}
          from={{ x: 100, opacity: 0 }}
          to={{ x: 0, opacity: 1 }}
          config={config.molasses}
        >
          {({ x, opacity }) => (
            <animated.svg onClick={() => {setOpen(!open)}} className="menu" strokeDashoffset={props.x} width="710px" height="315px" viewBox="0 0 710 315" version="1.1" >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M27,305 C17,256.333333 12,226 12,214 C12,196 4,129 27,129 C50,129 63,144 74,169 C81.3333333,185.666667 87.6666667,211.333333 93,246 C82.3333333,184 79.6666667,147.666667 85,137 C93,121 114,123 125,138 C136,153 136,203 162,229 C188,255 220,265 250,235 C280,205 290,168 290,153 C290,138 278,121 261,121 C244,121 224,144 234,179 C244,214 285,222 311,222 C337,222 355,205 355,179 C355,161.666667 352,142.333333 346,121 L393,211 C371.666667,147.666667 369.333333,111.666667 386,103 C411,90 435,132 462,153 C489,174 493,180 502,169 C511,158 519,119 515,103 C512.333333,92.3333333 506.666667,81.6666667 498,71 C528,115.666667 547.666667,141.333333 557,148 C571,158 599,153 607,103 C615,53 609,44 607,36 C605.666667,30.6666667 601,22.3333333 593,11 C613,50.3333333 631,77.6666667 647,93 C671,116 706,141 698,80" id="Path-29" stroke="#000000" strokeWidth="20"></path>
              </g>
            </animated.svg>
          )}
        </Spring>
        {/*<img
          className="menu"
          alt="menu"
          src={menu}
          onClick={() => {setOpen(!open)}}
        />*/}
      </div>
      <div className={`menu-list ${open ? 'show' : 'hide'}`}>
        <img className="dropdown-items" alt="projects" src={projects} />
        <img className="dropdown-items" alt="about" src={about} />
      </div>
    </div>
  );
};

export default Dropdown;
