import React, { useState } from 'react';
import Board from './Components/Board';
import { calculateWinner } from './helper';
import './Styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);

  const [isXnext, setIsXBoard] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner
    ? `${winner} baby you are winner`
    : `${isXnext ? 'X' : 'O'} yours turn`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return Square;
      });
    });
    setIsXBoard(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
