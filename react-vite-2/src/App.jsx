import "./App.css";
import { Fragment } from "react";
import Counter from "./Counter";
let name = "praveen";
const gender = "Male";
let islogged = true;
function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 style={{ backgroundColor: "red", color: "black" }}>React js vite</h1>
        {islogged && (
          <p className="text-warning
           h1">
            <i className="bi bi-emoji-smile-fill fs-3"></i> Welcome to React js vite
          </p>
        )}
        <p>
          Hello my Name is {name} and my gender is {gender}
        </p>
        <label htmlFor="age">Your age : </label>
        <input id="age" type="number" />
      </div>
      <Counter/>
    </Fragment>
  );
}
export default App;
