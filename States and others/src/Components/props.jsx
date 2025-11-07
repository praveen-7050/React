import React from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Props(props) {
  return (
    <>
      <div className="details">
        {/* <p className="h1 fw-bold text-warning text-center"> This is props</p> */}
        <table className="my-3">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{props.name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{props.age}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{props.Gender}</td>
            </tr>
            <tr>
              <th>isMarried</th>
              <td>{props.isMarried ? "yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
// Props.PropTypes={
//   name:PropTypes.string,
//   age:PropTypes.number,
//   Gemder:PropTypes.string,
//   isMarried:PropTypes.bool,
  
// }
export default Props;
