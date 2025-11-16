import React, { state, useState } from "react";

function Counter() {
  // let count = 0
  let [count, setcount] = useState(0);
  let [data, setData] = useState("Error");
  function Increase() {
    setcount((precount) => precount + 1);
  }
  function Decrease() {
    {
      setcount(count - 1);
    }
  }
  console.log("counting");
  let message;
  let reamingingcount = 10 - count;
  if (count < 10) {
    message = 
    <div>
    <h3>you clciked {count} Times</h3>;
    <h4>you still Have a {reamingingcount}</h4>
    </div>
  }
  else if (count===10){
     message = (
       <div>
         <h3>you clciked {count}TImes</h3>;<h4>You achived the basic 10% reward</h4>
       </div>
     );
  }else if(count >25){
      message = (
        <div>
          <h3>you clciked {count}TImes</h3>;<h4 className="text-success">You reached the reward Limit</h4>
        </div>
      );
  }else{
     message = (
       <div>
         <h3>you clciked {count}TImes</h3>
       </div>
     );
  }

  let dispalycomp=()=>{
    switch (data) {
      case "loading":
        return <Loadingcomp/>;
        break;
      case "Success":
        return <Successcomp/>;
        break;
      case "Error": 
        return <Errorcomp/>;
        break;
    }
  }
  return (
    <div className="container">
      <h1> counter Application = {count}</h1>
      <button className=" btn btn-primary mx-3 my-3" onClick={Increase}>
        Increase
      </button>
      {count >= 10 ? <p className="text-success fw-semibold fs-5">you unlocked the reawrds</p> : <p className="text-danger fs-5 fw-semibold">Click 10 TImes To unlock the reards</p>}
      {message}
      {count >= 20 && <p className="text-muted fw-semibold fs-5">you are the best</p>}
      <button className=" btn btn-success" onClick={Decrease}>
        Decrease
      </button>
      <p>{dispalycomp()}</p>
    </div>
  );
}

export default Counter;

function Loadingcomp(){
  return(
  <p className="text-warning fw-semibold  ">loading the content</p>
  )
}
function Successcomp() {
  return(
  <p className="text-success fw-semibold  ">The content is success fully loaded</p>
  )
}
function Errorcomp() {
  return(
  <p className="text-danger fw-semibold  ">Error in the content</p>
  )
}