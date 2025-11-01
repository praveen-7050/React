import { useNavigate } from "react-router-dom";
const Contact = ()=>{
    const navigate = useNavigate();
    const gotohome = ()=>{
        navigate('/')
    }
    return (
        <>
         <h1>Contact</h1>
         <button onClick={gotohome}> Click to Navigate to home</button>
        </>
    )
}
export default Contact