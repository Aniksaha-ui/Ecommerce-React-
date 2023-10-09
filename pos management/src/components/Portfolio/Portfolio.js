import React from "react";
import anik from "../../assets/profile/anik.png";
const Portfolio = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={anik} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Anik Saha</h1>
          <p class="py-6">Education : BSC in CSE,East West University</p>
          <p>Skills : React js,Node js,Laravel,MongoDB,SQL</p>
          <p>Tools : Firebase,Netlify,Heroku</p>
          <h3 class="text-3xl text-center py-3">Projects</h3>

          <p>Ecommerce website : https://ecovani.xixotech.net/public</p>

          <p>
            Car Manufactureing Company : https://manufacturing-fe9f8.web.app/
          </p>

          <p>
            Inventory Management System :
            https://inventory-management-642d1.web.app/
          </p>

          <button class="btn btn-primary mt-4">
            Github Link : www.github.com/Aniksaha-ui
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
