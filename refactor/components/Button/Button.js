import React from 'react';
import './Button.css';
import GameContext from '../../GameContext.js';

const Button = (props) => {
  {
    ({ playing, startGame }) =>
      <button onClick={props.startGame}>
        {props.playing ? 'reset' : 'start'}
      </button>
  }
}

export default Button;
