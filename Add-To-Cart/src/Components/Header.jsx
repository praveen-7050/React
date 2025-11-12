import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-5" href="#">
            Food Cart
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex ms-auto">
              <li className="nav-link mx-5">
                <Link className="text-decoration-none text-dark fw-semibold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-link mx-5 ">
                <Link className="text-decoration-none text-dark fw-semibold" to="cart">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
