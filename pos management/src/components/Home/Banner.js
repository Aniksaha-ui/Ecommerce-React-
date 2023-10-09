import React from "react";
import banner from "../../assets/banner/banner.jpg";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero lg:bg-light">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          width="350"
          src={banner}
          className=" rounded-lg shadow-2xl mt-3"
          alt=""
        />
        <div>
          <h1 className="text-2xl font-bold">Who Are We?</h1>
          <p className="py-6 text-xl">
            OneTech is one of the best menufacturing company all over the
            world.We purchase car in more than 80+ countries with 1200 client.We
            Start our journey in 2019, and now we are so much happy with our
            client.
          </p>
          <PrimaryButton>Get Ready</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
