import "./App.css";
'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Unknown from "./components/Unknown"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createContext, useState } from "react";
export const ThemeContext = createContext();
export function App() {
  const [Theme, setTheme] = useState("light");
  const toggletheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {/* <button onClick={toggletheme}>Theme</button>
      <Header Name="praveen" />
      <Content />
      <Footer UName="surya" /> */}
      <Unknown />
    </ThemeContext.Provider>
  );
}
