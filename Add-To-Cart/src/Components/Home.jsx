import React, { useState, useContext } from "react";
import data from "../assets/Products.json";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Home = () => {
  const [products] = useState(data);
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="">
        <div className="container products-container">
          <div className="container">
            <h1 className="text-center text-danger  py-5">All Products</h1>

            <div className="row">
              {products.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <div className="card h-100 shadow-sm p-3" style={{ width: "100%" }}>
                    <img src={item.image} className="img-fluid" alt={item.title} style={{ height: "250px", objectFit: "contain" }} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-truncate">{item.description}</p>
                      <p className="card-text fw-semibold">Category: {item.category}</p>
                      <p className="card-text">Rating : {item.rating.rate} / 5</p>
                      <p className="card-text text-success fw-bold">${item.price}</p>
                      <div className="d-grid gap-2">
                        <button className="btn btn-primary fw-semibold" type="button">
                          SHOP NOW
                        </button>
                        <button className="btn btn-danger fw-semibold" type="button" onClick={() => addToCart(item)}>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
