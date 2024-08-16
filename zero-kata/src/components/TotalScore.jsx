import React from "react";

function TotalScore({ state }) {
  return (
    <div className="p-5 bg-slate-700 text-white shadow-lg rounded-lg w-[400px] gap-2 flex flex-col">
      {state.playerWon&&<span className="text-3xl self-center text-white">
        Player Won:{" "}
        <span
          className={`${
            state.playerWon == "X" ? "text-green-500" : "text-orange-500"
          }`}
        >
          {state.playerWon}
        </span>
      </span>}
      {state.lastPlayerWon&&<span className="text-3xl self-center text-white">
        Last Player Won:{" "}
        <span
          className={`${
            state.lastPlayerWon == "X" ? "text-green-500" : "text-orange-500"
          }`}
        >
          {state.lastPlayerWon}
        </span>
      </span>}
    </div>
  );
}

export default TotalScore;
