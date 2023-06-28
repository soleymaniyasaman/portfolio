import React from "react";
import Header from "../../components/header/Header";
import About from "../about/About";
import ProjectPage from "../project/ProjectPage";

function Home() {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
      <ProjectPage />
    </>
  );
}

export default Home;
