import React from 'react';
import Background from './components/Background';
import Dropdown from './components/Dropdown';
import './styles/_app.scss';

export default () => {
  return (
    <div>
      <Background />
      <Dropdown />
    </div>
  );
};
