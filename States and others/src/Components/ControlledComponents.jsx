import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const ControlledComponents = () => {
    const [forData,setData]=useState({
        username:"",
        password:""
    })
    const handlechange = (e)=>{
         const {name,value}=e.target;
         setData(pre=>({
            ...pre,
            [name]:value
         }))
    }
    console.log(forData)
    return (
      <form className="container">
        <input type="text" className=" my-5" name="username" onChange={handlechange} placeholder="username " /> <br />
        <input className=" my-5" type="password" name="password " onChange={handlechange} placeholder="password " />
      </form>
    );
  
}

export default ControlledComponents