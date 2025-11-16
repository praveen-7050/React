import React,{useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const UncontrolledComponents = () => {
  const userRef = useRef();
  const passRef = useRef();

  const handleSumbit =(e)=>{
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    console.log('username:',username)
    console.log('password:',password)
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input ref={userRef} placeholder="again username" />
        <input ref={passRef} type="password" placeholder="again password" />
        <button className='btn btn-danger' type="submit">submit</button>
      </form>
    </>
  );
}

export default UncontrolledComponents
