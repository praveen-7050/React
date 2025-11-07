import React, { Children } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Props from "./Components/props";
import { State } from "./Components/state";
import {Useeffect} from "./Components/useeffect"
import Apifetch from "./Components/Apifetch";
// import Children from "./Components/children";
function App() {
  return (
    <>
      {/* <Props name="praveeen" age={25} Gender="Male" isMarried={true} />
      <Props name="Surya" age={21} Gender="Male" isMarried={false} />
      < State />
     <Useeffect/> */}
     <Apifetch/>  
      {/* <Children>
        <p className="text-muted">this is para 1</p>
        <p className = "text-muted">this is para 2</p>
        <p className="text-muted">this is para 3</p>
      </Children> */}
    </>
  );
}
export default App;
