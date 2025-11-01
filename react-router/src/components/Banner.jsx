import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from '../assets/Bannerimage.jpg'
import '../App.css';

function Banners(){
    return (
      <>
        <div className="container text-center">
          <img src={Banner} className=" banner-img" alt="Banner=img" />
        </div>
      </>
    );
}
export default Banners