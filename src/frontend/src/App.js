import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import USMap from "./components/USMap";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      {/* Global site header (nav + links) */}
      <Header />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<USMap />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
