import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatWeOffer from "./components/WhatWeOffer";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Teachers from "./components/Teachers";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <Stats />
      <Courses />
      <Gallery />
      <Teachers />
      <Testimonials />
      <Blog />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
