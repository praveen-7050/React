import { useNavigate } from "react-router-dom";
const About = ()=>{
    const navigate = useNavigate();
    const contactpage =()=>{
        navigate('/contact')
    }
    return (
      <>
        <h1>About </h1>
        <button onClick={contactpage}>Click to go contact page</button>
      </>
    );
}
export default About;