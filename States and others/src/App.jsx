// import React, { Children } from "react";
import "./App.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Navbar from "./Components/Navbar";
// import Props from "./Components/props";
// import { State } from "./Components/state";
// import {Useeffect} from "./Components/useeffect"
// import Apifetch from "./Components/Apifetch";
// import Cricketscore from "./Components/Cricketscore";
// import ClockStopwatch from "./Components/Digital-timer";
import ControlledComponents from "./Components/ControlledComponents";
import UncontrolledComponents from "./Components/UncontrolledComponents";
import Usememeo from "./Components/Usememeo";
// import Children from "./Components/children";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Props name="praveeen" age={25} Gender="Male" isMarried={true} /> */}
      {/* <Props name="Surya" age={21} Gender="Male" isMarried={false} /> */}
      {/* < State /> */}
      <Usememeo/>
     {/* <Useeffect/>  */}
      {/* <Apifetch /> */}
      {/* <Cricketscore/> */}
      {/* <ClockStopwatch/> */}
      {/* {<ControlledComponents/>} */}
      {/* {<UncontrolledComponents/>} */}
      {/* <Children>
        <p className="text-muted">this is para 1</p>
        <p className = "text-muted">this is para 2</p>
        <p className="text-muted">this is para 3</p>
      </Children> */}
    </>
  );
}
export default App;
