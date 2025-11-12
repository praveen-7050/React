import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Cricketscore = () => {
    const [score,setscore] = useState(0)
    const [wickets,setWickets] = useState(0)
    const [Balls,setBalls] = useState(0)
    const [Over,setOver] = useState(0)
    useEffect(()=>{
        if(Balls>6){
            setOver(Over+1)
            setBalls(0)
        }
    },[Balls])
    const addscore=(runs)=>{
        setscore(runs + score);
        setBalls(Balls +1);
    }
    useEffect(()=>{
        if(wickets==10){
            setscore(0)
            setBalls(0)
            setOver(0)
            setWickets(0)
            setWickets(0)
        }
    },[Balls])
    const wicket =(wick)=>{
        setWickets(wickets+ 1);
        setBalls(Balls + 1)
    }
  return (
    <>
      <div className="container">
        <div className="div">
          <h2 className="text-center my-5 fw-bold">circket scoreboard</h2>
          <h3 className="mt-5 text-center my-3">Score: {score}</h3>
          <h3 className="text-danger my-3 text-center">Wickets: {wickets}</h3>
          <h3 className="text-center my-3">Balls: {Balls}</h3>
          <h3 className="text-center my-3 mb-5">Overs: {Over}</h3>
        </div>
        <div className="div-1 d-flex justify-content-center mt-5">
          <button className=" text-center btn mx-3 btn-primary" onClick={() => addscore(1)}>
            1 Run
          </button>
          <button className="btn mx-3 btn-success" onClick={() => addscore(2)}>
            2 Runs
          </button>
          <button className="btn mx-3 btn-primary" onClick={() => addscore(3)}>
            3 Runs
          </button>
          <button className="btn mx-3 btn-success" onClick={() => addscore(4)}>
            4 Runs
          </button>
          <button className="btn mx-3 btn-warning " onClick={() => addscore(5)}>
            6 Runs
          </button>
        </div>
        <div className="div-2 mt-3  d-flex justify-content-center ">
          <button className="btn btn-danger mx-3" onClick={()=>wicket(1)}>Wicket </button>
        </div>
      </div>
    </>
  );
};

export default Cricketscore;
