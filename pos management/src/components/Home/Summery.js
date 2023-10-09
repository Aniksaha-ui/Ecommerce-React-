import React from "react";
import ShowSummary from "./ShowSummary";
import client from "../../assets/Summary/client.png";
import product from "../../assets/Summary/product.png";
const Summery = () => {
  return (
    <>
      <h3 className="text-3xl text-center font-bold">Summary</h3>
      <div className="mt-8 px-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ShowSummary
          summaryTitle="Total Client"
          backgroundClass="bg-gradient-to-r from-sky-500 to-blue-500"
          img={client}
          value="420"
        />
        <ShowSummary
          summaryTitle="Total Products"
          backgroundClass="bg-gradient-to-r from-secondary to-primary"
          img={product}
          value="100"
        />
        <ShowSummary
          summaryTitle="Total Products"
          backgroundClass="bg-gradient-to-r from-secondary to-primary"
          img={client}
          value="100"
        />
      </div>
    </>
  );
};

export default Summery;
