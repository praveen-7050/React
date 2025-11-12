import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Apifetch = () => {
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setDetails(result))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-dark">
      <div className="container">
        <h1 className="text-center text-danger  py-5">All Products</h1>
        <div className="mb-4">
          <input type="text" className="form-control my-5" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="row">
          {details
            .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm p-3" style={{ width: "100%" }}>
                  <img src={item.image} className="img-fluid" alt={item.title} style={{ height: "250px", objectFit: "contain" }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">{item.description}</p>
                    <p className="card-text fw-semibold">Category: {item.category}</p>
                    <p className="card-text">Rating : {item.rating.rate} / 5</p>
                    <p className="card-text text-success fw-bold">${item.price}</p>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary fw-semibold" type="button">
                        SHOP NOW
                      </button>
                      <button class="btn btn-danger fw-semibold" type="button">
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
  );
};

export default Apifetch;
