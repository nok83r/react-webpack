import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import Game from './components/Game';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Square />, document.getElementById('app'));

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);
