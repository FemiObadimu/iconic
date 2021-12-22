import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/main/Home";
import NotFound from "./components/NotFound";
import Navbars from "./components/Navbars";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <Router>
      <div className="App">
        <Navbars toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
