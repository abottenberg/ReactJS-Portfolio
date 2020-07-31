import React from 'react';
import a from '../images/letters/0.png';
import l from '../images/letters/1.png';
import e from '../images/letters/2.png';
import x from '../images/letters/3.png';
import b from '../images/letters/4.png';
import o from '../images/letters/5.png';
import t from '../images/letters/6.png';
import tt from '../images/letters/7.png';
import ee from '../images/letters/8.png';
import n from '../images/letters/9.png';
import bb from '../images/letters/10.png';
import eee from '../images/letters/11.png';
import r from '../images/letters/12.png';
import g from '../images/letters/13.png';
import '../styles/_app.scss';
import '../styles/_background.scss';

const Background = () => {
  const letters = [
    a, l, e, x, b, o, t, tt, ee, n, bb, eee, r, g
  ];

  const renderedLetters = letters.map((letter, index) => {
    return (
      <div key={index} className={`letter letter-${index}`} style={{ "textAlign": "center "}}>
        <img src={letter} alt="background" />
      </div>
    );
  })

  return (
    <div className="background-container">
     {renderedLetters}
    </div>
  );
};

export default Background;
