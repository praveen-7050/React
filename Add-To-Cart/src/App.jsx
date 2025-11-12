// import {createContext} from "react";
 import Header from "./Components/Header";
 import Home from "./Components/Home";
 import { CartProvider } from "./Components/CartContext"
 import Products from "./Components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (  
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Products />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
