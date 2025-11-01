import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Navbar() {
  return (
    <>
      <div className="container position-sticky top-0 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-4">Fashionable</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <Link to="/" className="nav-link">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="nav-item">
                    <a className="nav-link">About</a>
                  </li>
                </Link>
                <Link to="/conatct" className="nav-link">
                  <li className="nav-item">
                    <a className="nav-link">conatct</a>
                  </li>
                </Link>
                <div className="btn-group">
                  <button type="button" className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </button>
                  <ul className="dropdown-menu ">
                    <Link to="/mens" className="nav-link ">
                      <li>
                        <a className="dropdown-item ">Mens cloth </a>
                      </li>
                    </Link>
                    <Link to="/womens" className="nav-link  ">
                      <li>
                        <a className="dropdown-item ">Womens Cloth</a>
                      </li>
                    </Link>
                    <Link to="/child" className="nav-link  ">
                      <li>
                        <a className="dropdown-item ">children cloth</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success">Search</button>
              </form>
              <Link to="/Login" className="nav-link">
                <button className="btn btn-outline-danger mx-3">Login</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
