import Navbar from "./components/Navbar";
import ReactSwitch from "react-switch";
import { createContext, useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleTheme = () => {
    setDarkMode((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };
  return (
    <>
      <Navbar />
      <button className="switch z-50">
        <ReactSwitch
          className="m-0 z-50"
          onChange={toggleTheme}
          checked={darkMode === "dark"}
        />
        <label> {darkMode === "light" ? "Light Mode" : "Dark Mode"}</label>
      </button>
      <Home />
      <About />
    </>
  );
}

export default App;
