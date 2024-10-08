import Navbar from "./components/Navbar";
import ReactSwitch from "react-switch";
import { createContext, useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleTheme = () => {
    setDarkMode((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Navbar />
          {/*             
          <button className="switch z-50">
            <ReactSwitch
              className="m-0 z-50"
              onChange={toggleTheme}
              checked={darkMode === "dark"}
            />
            <label> {darkMode === "light" ? "Light Mode" : "Dark Mode"}</label>
          </button> */}
          <Home />
          <About />

          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
