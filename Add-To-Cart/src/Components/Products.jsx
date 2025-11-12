import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Products = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty 🛒</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm p-3">
                <img src={item.image} className="img-fluid" alt={item.title} style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                  <h5>{item.title}</h5>
                  <p className="fw-bold text-success">${item.price}</p>
                  <button className="btn btn-outline-danger fw-semibold" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
