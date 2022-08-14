import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div
      style={{
        border: "4px solid darkblue",
        borderRadius: "10px",
        width: "450px",
        height: "450px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
      }}
    >
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
