import React from "react";
import Square from "./Square";
import toast from "react-hot-toast";

function Board({ state, dispatch }) {
  function winnerCheck() {
    const winningChance = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let chance of winningChance) {
      const [x, y, z] = chance;
      if (
        state.board[x] &&
        state.board[x] == state.board[y] &&
        state.board[x] == state.board[z]
      ) {
        dispatch({ type: "won", payload: state.board[x] });
        return;
      }
    }
  }
  function handleSquareClick(index) {
    if (!state.isActive) return toast.error(state.message);
    if (state.board[index]) return;
    const query = {
      type: "addO",
      payload: index,
    };
    if (state.currentTurn == "X") {
      query.type = "addX";
    }
    const promise = new Promise((resolve, reject) => {
      dispatch(query);
      resolve("State Updated");
    });
    promise.then(() => {
      winnerCheck();
    });
    // let oldBoard = state.board
    // oldBoard[index] = state.currentTurn
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Square onClick={() => handleSquareClick(0)} value={state.board[0]} />
        <Square onClick={() => handleSquareClick(1)} value={state.board[1]} />
        <Square onClick={() => handleSquareClick(2)} value={state.board[2]} />
      </div>
      <div className="flex items-center gap-2">
        <Square onClick={() => handleSquareClick(3)} value={state.board[3]} />
        <Square onClick={() => handleSquareClick(4)} value={state.board[4]} />
        <Square onClick={() => handleSquareClick(5)} value={state.board[5]} />
      </div>
      <div className="flex items-center gap-2">
        <Square onClick={() => handleSquareClick(6)} value={state.board[6]} />
        <Square onClick={() => handleSquareClick(7)} value={state.board[7]} />
        <Square onClick={() => handleSquareClick(8)} value={state.board[8]} />
      </div>
    </div>
  );
}

export default Board;
