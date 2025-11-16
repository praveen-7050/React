import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useState } from "react";

export const State = () => {
  let arr1 =[1,2,3,456,"mango"];
  // let vegeies = ['tomato','beetroot','ladiesfinger']
  let  output= arr1.map((items,index)=>{
    return (
      <div key={index}>
        <h1>{items}</h1>
        {/* <h1>efewfwe</h1> */}
      </div>
    );
})
  return(
    <div className='container ms-5'>
      <p className="text-danger fs-5 fw-semibold">{arr1}</p>
      <p className="text-success fs-5 fw-semibold">{output}</p>
    </div>
  )
}

