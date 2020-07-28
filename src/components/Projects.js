import React from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import Link from './Link';
import '../styles/_projects.scss';
import turningseasons from "../images/TurningSeasons.mov";
import jokester from "../images/Jokester.mov";
import mistercocktail from "../images/MisterCocktail.mov";

const projects = [
  {
    "title": "Turning Seasons",
    "description": "A group project made as part of the Le Wagon web development bootcamp. This was an idea I pitched to the group - a web app designed to make it easier to eat local, seasonal produce by showing inspiring recipes whose main ingredients are currently in season. Select recipes you like and add the ingredients to your shopping list. Made on Ruby on Rails",
    "link": "http://www.turningseasons.co.uk/",
    "video": turningseasons
  },
  {
    "title": "Jokester",
    "description": "My first ReactJS app. This is a simple app that loads 10 random jokes from an api.",
    "link": "",
    "video": jokester
  },
   {
    "title": "Mister Cocktail",
    "description": "A cocktail recipe app that I built using Ruby on Rails. A simple app where you can add your own cocktails and add ingredients.",
    "link": "https://bottenberg-cocktails.herokuapp.com/",
    "video": mistercocktail
  }
];

const renderedProjects = projects.map((project, index) => {
  return (
    <div key={index}>
      <div className="video">
        <video className="video" loop autoPlay>
            <source src={project.video} type="video/mp4" />
        </video>
      </div>
      <div className="text">
        <div className="title">
          <h1>{project.title}</h1>
        </div>
        <div className="description">
          <p>{project.description}</p>
        </div>
        <div className="link">
          <a href={project.link} target="blank">{project.link === "" ? "" : "Link"}</a>
        </div>
      </div>

    </div>
  );
});


const pages = [
  style => (
    <animated.div className="active-project Turning" style={{ ...style }}>{renderedProjects[0]}</animated.div>
  ),
  style => (
    <animated.div className="active-project Jokester" style={{ ...style }}>{renderedProjects[1]}</animated.div>
  ),
  style => (
    <animated.div className="active-project Mister" style={{ ...style }}>{renderedProjects[2]}</animated.div>
  ),
];

export default class Projects extends React.Component {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
    }))
  render() {
    return (
      <div>
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
          <svg
            onClick={this.toggle}
            className="next-button"
            width="416px" height="100px"
            viewBox="0 0 416 275"
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
              <path d="M10.8125,107.164063 C10.8125,125.179688 9.00642333,143.286071 10.8125,161.210938 C12.7272268,180.21413 18.4732209,198.636394 21.921875,217.421875 C23.5289066,226.175685 25.0630644,234.959407 25.9765625,243.8125 C26.6438548,250.279509 26.284985,269.795423 26.65625,263.304688 C29.2658523,217.681641 24.0399229,238.729041 19.5546875,182.945313 C17.8002128,161.124576 8.27520075,121.06783 39.5625,114.828125 C60.9742719,110.557922 77.1518281,170.9604 80.15625,178.515625 C96.403731,219.373194 97.0531046,240.134613 144.820313,243.210938 C158.891825,244.117177 168.55029,208.960849 169.890625,202.117188 C172.12946,190.685847 172.969622,179.006709 173.726563,167.382813 C175.654561,137.775662 172.451225,124.833352 139.617188,127.90625 C117.860766,129.942407 126.725713,167.337037 133.101563,179.507813 C139.126405,191.008555 144.588889,201.93938 154.359375,210.46875 C189.310854,240.980446 230.26335,216.404981 245.679688,179.601563 C247.641399,174.91837 248.827941,169.869885 249.359375,164.820313 C251.93595,140.338236 253.426477,133.45723 232.640625,122.890625 C229.485443,121.28667 226.012786,120.324901 222.554688,119.570313 C219.054346,118.806506 214.511363,120.785355 211.875,118.359375 C209.978978,116.614656 216.846109,116.753645 219.421875,116.6875 C223.817105,116.574632 228.692953,115.74069 232.5625,117.828125 C240.28737,121.995322 246.730413,128.336759 252.789063,134.6875 C255.658592,137.695372 255.129597,147.091174 258.976563,145.515625 C263.189442,143.790213 258.770544,136.340527 259.65625,131.875 C260.844271,125.885269 262.069283,119.671679 265.148438,114.398438 C267.022898,111.188309 270.541561,109.081219 273.898438,107.484375 C278.666761,105.216116 283.870913,103.784913 289.09375,103.007813 C292.831657,102.451653 281.614269,104.802539 278.414063,106.8125 C273.437433,109.938184 268.583512,113.570638 264.9375,118.179688 C262.371144,121.423907 261.524599,125.740322 260.3125,129.695313 C259.148578,133.493105 258.071543,137.38641 257.835938,141.351563 C257.486391,147.234294 256.016089,153.704819 258.570313,159.015625 C262.281366,166.731741 269.307314,172.436364 275.585938,178.257813 C281.85076,184.066465 288.791838,189.173086 296.015625,193.734375 C298.765043,195.47043 302.004534,196.476814 305.21875,196.96875 C309.149541,197.570357 313.29801,197.962359 317.148438,196.96875 C320.129161,196.199569 322.861122,194.233401 324.867188,191.898438 C327.945152,188.315836 330.317596,184.07151 332.015625,179.664063 C334.995266,171.930031 337.220716,163.879092 338.796875,155.742188 C340.453147,147.1917 340.754105,138.433539 341.679688,129.773438 C342.712453,120.110485 344.360311,110.486428 344.671875,100.773438 C345.358839,79.3573687 345.542611,57.9015711 344.671875,36.4921875 C344.440215,30.7962167 343.090859,25.1472577 341.375,19.7109375 C340.369085,16.5239199 336.975191,7.57827975 336.59375,10.8984375 C331.716588,53.3504627 337.228717,119.069004 367.992188,152.25 C372.707343,157.335693 378.174651,161.685819 383.585938,166.023438 C385.093773,167.232099 386.782038,168.381664 388.664063,168.820312 C390.911128,169.344043 393.57516,169.951847 395.585938,168.820312 C397.563174,167.707653 398.340816,165.119714 399.0625,162.96875 C401.297109,156.308543 403.347439,149.525326 404.390625,142.578125 C405.569523,134.727138 405.070079,126.711221 405.695312,118.796875 C406.114905,113.485575 406.237907,129.581724 405.007812,134.765625 C402.944852,143.459412 399.669741,151.873195 395.921875,159.984375 C394.997304,161.985343 393.265917,163.827653 391.210938,164.625 C388.540382,165.661194 385.466151,165.562242 382.632812,165.140625 C369.402205,163.171833 342.801281,115.095421 342.367188,114.40625 C341.690202,113.331462 340.281484,111.473155 341.320312,110.742188 C381.7499,82.2940538 382.7728,93.248819 404.5,49.90625" id="Path-25" stroke="#000000" strokeWidth="20"></path>
            </g>
          </svg>
        </div>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => pages[index]}
        </Transition>
      </div>
    );
  };
};
