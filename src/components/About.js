import React from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import Link from './Link';
import '../styles/_about.scss';



const page = [
  style => (
    <animated.div className="about-container" style={{ ...style }}>
      <p>I am a creative and driven individual with 6 years previous experience as a menswear designer working for heritage brands such as Burberry and Pringle of Scotland.</p>
      <p>I decided to change careers to broaden my future opportunities and chose coding because I liked the idea of still being creative, building things and problem solving, all the things I enjoyed when designing menswear.</p>
      <p>I have experience in Ruby on Rails, ReactJS, HTML, CSS/SASS and Bootstrap. I have a good understanding of TDD, PostreSQL and database structures and working with APIs. I am excited to combine my new skills with my previous experience to pursue a career as a front-end developer.</p>
      <div className="links">
        <a className="github" href="https://github.com/abottenberg" target="blank">Github</a>
        <a className="linkedin" href="https://www.linkedin.com/in/alex-bottenberg/" target="blank">LinkedIn</a>
      </div>
    </animated.div>
  )
];

const About = () => {
  return (
    <div>
      <Transition
        native
        reset
        unique
        from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
        {index => page[0]}
      </Transition>
      <div className="project-buttons">
        <Link href="/">
          <svg className="close"
            width="243px" height="100px"
            viewBox="0 0 243 208"
            version="1.1"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g id="Group-3"
                transform="translate(10.710938, 10.117188)"
                stroke="#000000"
                strokeWidth="20"
              >
                <path d="M89.8046875,186.390625 C91.9134772,147.759392 138.054968,68.1378214 163.4375,35.671875 C189.009822,2.9631746 178.476832,3.62399883 195.359375,3.62399883" id="Path-27"></path>
                <path d="M0,0 C57.8255029,40.4077381 107.766451,93.2551728 161.5,138.898438 C180.487407,155.027043 202.774398,165.301506 221.390625,181.601562" id="Path-28"></path>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default About;

