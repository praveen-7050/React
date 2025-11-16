import { useRef } from "react";

const Useref = () => {
  //   console.log("rendering");
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "tomato";
  }
  return (
    <div>
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Useref;
