import React from "react";
import ShowServices from "./ShowServices";
import freedelivery from "../../assets/services/freedelivery.jpg";
import emergencyservice from "../../assets/services/24hours.jpg";
import fastdelivery from "../../assets/services/download.png";
const Services = () => {
  return (
    <>
      <h3 className="text-3xl text-center font-bold">Our Services</h3>
      <div className="mt-8 px-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ShowServices service="Free Delivery" img={freedelivery} />
        <ShowServices service="24 hours" img={emergencyservice} />
        <ShowServices service="Fast Delivery" img={fastdelivery} />
      </div>
    </>
  );
};

export default Services;
