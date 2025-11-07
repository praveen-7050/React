import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useState } from "react";

export const State = () => {
    // let count =0
    const [count , setcount] = useState(0)
    function increase(){
        setcount(count+1)
    }
    function decrease(){
       setcount(count-1) 
    }
      const [yes ,setyes] = useState("yes" , "No")
    function postive(){
        setyes('yes')
        }
           function negative(){
            setyes("No")
        }
    let name =(name)=>{
        this.name = name
    }
    return (
      <>
        <div className="container">
          <p className="text-muted fw-bold">Number of numbers = {count}</p>
          <button className="btn btn-outline-success mx-3" onClick={increase}>
            Increase
          </button>
          <button className="btn btn-outline-danger" onClick={decrease}>
            Decrease
          </button>
        </div>
        <div className="container fw-bold">
          <p className="text dangerbn fw-bold">{yes}</p>
          <button className="btn btn-primary mx-3" onClick={postive}>
            Click to yes 
          </button>
          <button className="btn btn-primary" onClick={negative}> click to no</button>
        </div>
      </>
    );
    
}

