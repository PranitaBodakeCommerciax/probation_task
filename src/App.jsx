import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Trustbar from "./components/Trustbar";
import Features from "./components/Features ";
import Advantage from "./components/Advantage";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import PrimaryCTA from "./components/PrimaryCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Main id="home" />
      <Trustbar />
      <Features id="features" />
      <Advantage id="why-us" />
      <Testimonials id="testimonials" />
      <Pricing id="pricing" />
      <FAQ id="faq" />
      <Blog id="blog" />
      <PrimaryCTA id="primary-cta" />
      <Footer />
    </div>
  );
}

export default App;
