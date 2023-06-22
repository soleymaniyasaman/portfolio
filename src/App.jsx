import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, About, Contact, ProjectPage, ErrorPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
