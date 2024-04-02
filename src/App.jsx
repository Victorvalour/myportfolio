import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";



function App() {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
   
  );
}

export default App;
