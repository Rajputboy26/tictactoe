import React from 'react';

const Message = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `${winner} baby you are winner`}
      {!winner && !noMovesLeft && `${current.isXnext ? 'X' : 'O'} yours turn`}
      {!winner && noMovesLeft && `X and O are tied`}
    </h2>
  );
};

export default Message;
