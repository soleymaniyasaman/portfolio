import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, ProjectPage, ErrorPage } from "./pages";
import CursorAnimation from "./utils/CursorAnimation";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <CursorAnimation />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
