import React, { useState } from "react";
import Square from "./Square";
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const checkWinner = (squares) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner(squares);

  const handleClick = (index) => {
    if (squares[index] !== null) return;
    const copysquares = [...squares];
    copysquares[index] = xIsNext ? "X" : "O";
    setSquares(copysquares);
    setXIsNext(!xIsNext);
  };

  const isDraw = squares.every((square) => square !== null) && !isWinner;
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <h4 className="status">{isWinner} Won the Game</h4>
          <button
            onClick={() => {
              setSquares(Array(9).fill(null));
              setXIsNext(true);
            }}
          >
            Play Again
          </button>
        </>
      ) : isDraw ? (
        <>
          <h4 className="status">It's a Draw!</h4>
          <button
            onClick={() => {
              setSquares(Array(9).fill(null));
              setXIsNext(true);
            }}
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <h4 className="status">{xIsNext ? "X" : "O"}'s Turn</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={squares[0]} />
            <Square onClick={() => handleClick(1)} value={squares[1]} />
            <Square onClick={() => handleClick(2)} value={squares[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={squares[3]} />
            <Square onClick={() => handleClick(4)} value={squares[4]} />
            <Square onClick={() => handleClick(5)} value={squares[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={squares[6]} />
            <Square onClick={() => handleClick(7)} value={squares[7]} />
            <Square onClick={() => handleClick(8)} value={squares[8]} />
          </div>
        </>
      )}
    </div>
  );
}
export default Board;
