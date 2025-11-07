import React, { useEffect, useState } from "react";    
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export const Useeffect = () => {
    const [num, setnum] = useState(100)
    useEffect(()=>{
        setnum(200)
    },[])
    const [name,setname] = useState("praveen")
    useEffect(()=>{
      setname("surya")
    },[])
  return (
      <>
      <div className="container">
        <h1 className="text-danger">{num}</h1>
        <h1>{name}</h1>
        <button className="btn btn-warning mx-3">Click to change the name</button>
      </div>
    </>
  );
};
