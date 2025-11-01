import { useNavigate } from 'react-router-dom';

const Home =()=>{
    const naviagate = useNavigate();
    const handleclick = ()=>{
        naviagate('/about');
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleclick}>Click to navigate to about </button>
        </>
    )
}
export default Home