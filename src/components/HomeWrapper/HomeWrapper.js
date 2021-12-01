import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Project from "../Project/Project";

const HomeWrapper = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      {/* <Service></Service> */}
      <Project></Project>
      {/* <Blog></Blog> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomeWrapper;
