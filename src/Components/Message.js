import React from 'react';

const Message = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="message">
      {winner && (
        <>
          Winner is {''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          <span className={current.isXnext ? 'text-green' : 'text-orange'}>
            {current.isXnext ? 'X' : 'O'}
          </span>{' '}
          yours turn
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default Message;
