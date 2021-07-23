import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import Message from './Components/Message';
import { calculateWinner } from './helper';
import './Styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXnext: true }];
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  // console.log(history);

  const [currentMove, setcurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : 'O';
        }
        return Square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setcurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setcurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setcurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <Message winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        New Game
      </button>
      <h2 style={{ fontWeight: 'lighter' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
