import React from "react";

const ShowServices = ({ img, service }) => {
  return (
    <div className="card lg:max-w-lg bg-primary text-white shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service name" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service}</h2>
      </div>
    </div>
  );
};

export default ShowServices;
