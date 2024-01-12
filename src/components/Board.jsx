/* eslint-disable react/prop-types */
import Square from "../components/Square";
import { calculateWinner } from "../utils/calculateWinner";

const Board = ({ squares, xIsNext, onPlay }) => {
  const winner = calculateWinner(squares);
  const drawn = squares.every((square) => square);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!winner && drawn) {
    status = "Game Draw";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  const handClick = (i) => {
    //Already full filled or winner or draw return null
    if (squares[i] || winner || drawn) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  return (
    <>
      <p>{status}</p>
      <div className="flex">
        <Square
          value={squares[0]}
          onSquareClick={() => handClick(0)}
          disabled={winner}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handClick(1)}
          disabled={winner}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handClick(2)}
          disabled={winner}
        />
      </div>

      <div className="flex">
        <Square
          value={squares[3]}
          onSquareClick={() => handClick(3)}
          disabled={winner}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handClick(4)}
          disabled={winner}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handClick(5)}
          disabled={winner}
        />
      </div>

      <div className="flex">
        <Square
          value={squares[6]}
          onSquareClick={() => handClick(6)}
          disabled={winner}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handClick(7)}
          disabled={winner}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handClick(8)}
          disabled={winner}
        />
      </div>
    </>
  );
};

export default Board;
