import './App.css'
import Home from './pages/Home';
import About from './pages/About'
import Navbar from './components/Navbar'
import Banners from './components/Banner';
// import Footer from './components/Footer';
import Conatct from './pages/Conatct';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes,Route } from 'react-router-dom';
import Mens from './pages/Mens';
import Womens from './pages/Womens'
import Child from './pages/Child'
import Login from './pages/Login'
// import About from './pages/Conatct';
// import Banner from './components/Banner';
function App(){
  return(
    <>
    <Navbar/>
    <Banners/>
    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/conatct' element={<Conatct/>}/>
        <Route path='/mens' element ={<Mens/>}/>
        <Route path ='/womens' element={<Womens/>}/> 
        <Route path = '/child' element={<Child/>}/>
        <Route path = '/Login' element ={<Login/>}/>
        </Routes>
        {/* <Footer/> */}
    </>
  )
}
export default App
