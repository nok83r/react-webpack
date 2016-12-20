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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
