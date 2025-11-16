import { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Usememeo = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const inputvalue = parseInt(event.target.value);
    setNumber(inputvalue);
  };

  const ComputeFactorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const memo = useMemo(() => ComputeFactorial(number), [number]);

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #4b79a1, #283e51)",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "380px",
          borderRadius: "18px",
          background: "#ffffffd9",
        }}
      >
        <h2 className="text-center fw-bold mb-3" style={{ color: "#283e51" }}>
          useMemo Demo
        </h2>

        <label className="fw-semibold" style={{ color: "#4b79a1" }}>
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={handleChange}
          className="form-control mb-3"
          style={{
            borderRadius: "12px",
            border: "2px solid #4b79a1",
          }}
        />

        <div
          className="p-3 text-center"
          style={{
            background: "#4b79a1",
            color: "white",
            borderRadius: "12px",
          }}
        >
          <h5 className="fw-bold mb-1">Factorial Output</h5>
          <p className="mb-0">
            {number} = <span className="fw-bold">{memo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usememeo;
