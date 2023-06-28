import React from "react";
import Header from "../../components/header/Header";
import About from "../about/About";

function Home() {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
    </>
  );
}

export default Home;
