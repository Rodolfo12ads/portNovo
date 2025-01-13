import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portifolio";
import Navbar from "./layout/Navbar";

import Container from "./layout/Container";
import Gallery from "./pages/Gallery";



function App() {

  
  return (
    <Router class="App">
      <Navbar />
      <main>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </Container>
      </main>
      
    </Router>
  );
}

export default App;
