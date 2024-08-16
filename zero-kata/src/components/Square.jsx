import React from "react";

function Square({ value, onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className={`w-[100px] h-[100px] shadow-lg flex items-center justify-center text-6xl text-green-500 bg-slate-900 rounded-md active:scale-90 transition-all cursor-pointer hover:outline outline-slate-600 select-none ${
        value == "X" ? "text-green-500" : "text-orange-500"
      }`}
    >
      {value}
    </div>
  );
}

export default Square;
