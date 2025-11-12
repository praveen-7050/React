import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Navbar = () => {
  return (
    <>
      
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand text-white">Navbar</a>
          <a className='nav-link text-white ms-auto mx-5'>Home</a>
            <button className="btn btn-outline-danger px-5" type="submit">
              CART-0 
            </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar