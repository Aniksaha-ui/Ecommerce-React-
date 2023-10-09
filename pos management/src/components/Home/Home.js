import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Information from "./Contact";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Services from "./Services";
import Summery from "./Summery";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Summery />
      {/* <Reviews /> */}
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
