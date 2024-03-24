import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import Navbar from "./components/Navbar";

// Routes
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Common/Services";
import Accomplishments from "./components/Common/Accomplishments";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="accomplishments" element={<Accomplishments />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
