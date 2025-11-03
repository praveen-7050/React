import React, { state, useState } from "react";

function Counter() {
  // let count = 0
  let [count, setcount] = useState(0);
  function Increase() {
    setcount((precount)=>precount+1);
    setcount((precount)=>precount+1);
    setcount((precount)=>precount+1);
  }
  function Decrease() {
    {
      setcount(count - 1);
    }
  }
  return (
    <div className="container">
      <h1> counter Application = {count}</h1>
      <button className=" btn btn-primary mx-3 my-3" onClick={Increase}>
        Increase
      </button>
      <button className=" btn btn-danger" onClick={Decrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
