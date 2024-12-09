import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useBoard } from "../../store/useBoard";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const butonsRef = useRef([]);
  const modeRef = useRef();
  const {startGame,continueGame} = useBoard()
  const navigate = useNavigate()
  function handleStart(){
    startGame(modeRef.current.value)
    localStorage.setItem('mode',modeRef.current.value)
    navigate('/game')
  }
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#Heading", {
      y: -50,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
    });
    tl.from(butonsRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.1,
    });
  });
  useEffect(() => {
    modeRef.current.value = localStorage.getItem('mode')?localStorage.getItem('mode'):"easy"
    butonsRef.current?.forEach((button) => {
      gsap.fromTo(
        button,
        { scale: 1 },
        {
          scale: 0.9,
          duration: 0.1,
          paused: true,
          ease: "power1.inOut",
          onComplete: () =>
            gsap.to(button, { scale: 1, duration: 0.1, ease: "power1.inOut" }),
        }
      );
      button.addEventListener("mousedown", () =>
        gsap.to(button, { scale: 0.9, duration: 0.1 })
      );
      button.addEventListener("mouseup", () =>
        gsap.to(button, { scale: 1, duration: 0.1 })
      );
      button.addEventListener("mouseleave", () =>
        gsap.to(button, { scale: 1, duration: 0.1 })
      );
    });
  }, []);
  return (
    <>
      <span id="Heading" className="text-3xl font-bold">
        Sudoku Game
      </span>
      <div className="flex flex-col gap-5 items-center justify-center">
        <button
          onClick={handleStart}
          ref={(el) => butonsRef.current.push(el)}
          className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90"
        >
          Start New
        </button>
        <button
        onClick={()=>{continueGame();navigate('/game')}}
          ref={(el) => butonsRef.current.push(el)}

          className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90"
        >
          Continue
        </button>
        <Link
        to={'/custom-suduko'}
          ref={(el) => butonsRef.current.push(el)}

          className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90"
        >
          Custom
        </Link>
        <div ref={(el) => butonsRef.current.push(el)} className="flex option items-center gap-5">
          <label className="text-xl font-semibold" htmlFor="mode">Difficulty:</label>
          <select
            className="bg-slate-900 p-5 rounded-lg"
            id="mode"
            ref={modeRef}
            defaultValue="easy"
          >
            <option value="veryEasy">Very Easy</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="extreme">Extreme</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Home;
