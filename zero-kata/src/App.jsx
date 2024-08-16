import React, { useReducer } from "react";
import Board from "./components/Board";
import TotalScore from "./components/TotalScore";
import { Toaster } from "react-hot-toast";
function reducer(state, action) {
  switch (action.type) {
    case "addO":
      // console.log(action)
      let newBoard = state.board;
      newBoard[action.payload] = "O";
      return { ...state, board: newBoard, currentTurn: "X" };
    case "addX":
      let newBoard2 = state.board;
      newBoard2[action.payload] = "X";
      return { ...state, board: newBoard2, currentTurn: "O" };
    case "start":
      return {
        ...state,
        board: Array(9).fill(null),
        currentTurn: "X",
        isActive: true,
      };
    case "won":
      return {
        ...state,
        isActive: false,
        playerWon: action.payload,
        message: "Click on Reset to start new game",
      };
    case "reset":
      return {
        ...state,
        board: Array(9).fill(null),
        currentTurn: "X",
        isActive: false,
        lastPlayerWon: state.playerWon,
        playerWon:null
      };
    default:
      return state;
  }
}

function App() {
  const initialBoard = {
    board: Array(9).fill(null),
    currentTurn: "X",
    isActive: false,
    lastPlayerWon: null,
    playerWon: null,
    message: "Please Click on Start to play game",
  };
  const [state, dispatch] = useReducer(reducer, initialBoard);
  return (
    <>
      <div className="w-[500px] flex flex-col items-center justify-center gap-4">
        <span className="text-5xl text-white">
          Player Turn:{" "}
          <span
            className={`${
              state.currentTurn == "X" ? "text-green-500" : "text-orange-500"
            }`}
          >
            {state.currentTurn}
          </span>
        </span>
        <Board dispatch={dispatch} state={state} />
        <div className="flex items-center justify-evenly w-full">
          <button
            disabled={state.isActive}
            onClick={() => dispatch({ type: "start" })}
            className={`py-2 px-3 bg-black text-white rounded-md ${
              state.isActive ? "active:scale-100 opacity-25" : "active:scale-90"
            }`}
          >
            Start
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="py-2 px-3 bg-black text-white rounded-md active:scale-95"
          >
            Reset
          </button>
        </div>
        <TotalScore state={state} />
      </div>
      <Toaster />
    </>
  );
}

export default App;
