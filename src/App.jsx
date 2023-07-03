import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, ProjectPage, ErrorPage } from "./pages";
import { Sidebar, ThemeTemplates } from "./components";

import CursorAnimation from "./utils/CursorAnimation";
import "./utils/templateColors.scss";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Sidebar />
      <ThemeTemplates />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <CursorAnimation />
    </HashRouter>
  );
}

export default App;
