import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Main from "./pages/Main/Main";
import Navbar from "./navbar/Navbar";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
