import './App.css'
import Header from './components/Header'
import Content from './components/Content';
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  // let name="praveen"
  return (
    <div className='App'>
      <Header Name="praveen" />
      <Content/>
      <Footer UName="surya" />
    </div>
  );
}

export default App
