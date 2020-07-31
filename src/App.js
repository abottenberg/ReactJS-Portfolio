import React from 'react';
import HorizontalScroll from './components/HorizontalScroll';
import Background from './components/Background';
import './styles/_app.scss';

import turningseasons from "./images/TurningSeasons.mov";
import jokester from "./images/Jokester.mov";
import mistercocktail from "./images/MisterCocktail.mov";

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



export default () => {
  return (
    <div>
      <Background />
      <HorizontalScroll projects={projects} />
    </div>
  );
};
