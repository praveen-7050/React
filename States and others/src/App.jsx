import React, { Children } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Props from "./Components/props";
import { State } from "./Components/state";
import {Useeffect} from "./Components/useeffect"
import Apifetch from "./Components/Apifetch";
import Cricketscore from "./Components/Cricketscore";
import ClockStopwatch from "./Components/Digital-timer";
// import Children from "./Components/children";
function App() {
  return (
    <>
      <Navbar />
      {/* <Props name="praveeen" age={25} Gender="Male" isMarried={true} />
      <Props name="Surya" age={21} Gender="Male" isMarried={false} />
      < State />
     <Useeffect/> */}
      <Apifetch />
      {/* <Cricketscore/> */}
      {/* <ClockStopwatch/> */}
      {/* <Children>
        <p className="text-muted">this is para 1</p>
        <p className = "text-muted">this is para 2</p>
        <p className="text-muted">this is para 3</p>
      </Children> */}
    </>
  );
}
export default App;
