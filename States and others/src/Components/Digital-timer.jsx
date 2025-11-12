import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const ClockStopwatch = () => {
   const [timer,setTimer]=useState(0)
   const [isrunning,setIsRunning]=useState(false)
   const intervalRef = useRef(null);

   const startTimer = ()=>{
    if (isrunning)return;
    setIsRunning(true);
    intervalRef.current = setInterval(()=>{
        setTimer((prev)=>prev+1);
    },1000)
   }
return (
  <div className="container my-5 bg-dark">
    <h1 className="text-center text-danger display-2 fw-semibold py-5">Time : {timer}s</h1>
    <div className="btn-div d-flex justify-content-center py-5">
      <button className="btn btn-primary mx-5 px-5 fs-5 fw-semibold">Start</button>
      <button className="btn btn-danger mx-5 px-5  fs-5 fw-semibold">stop</button>
      <button className="btn btn-warning mx-5 px-5   fs-5 fw-semibold">Reset</button>
    </div>
  </div>
);

};

export default ClockStopwatch;
