import { useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handeClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handeClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handeClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handeClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handeClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handeClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handeClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handeClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handeClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handeClick(8)}/>
      </div>
    </>
  );
}
