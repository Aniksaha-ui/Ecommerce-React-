import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";

const ShowParts = ({ part }) => {
  const { _id, name, minQuantity, img, description, availableQuantity, price } =
    part;

  const navigate = useNavigate();
  const togglePurchase = (id) => {
    // console.log(id);
    navigate(`/purchase/${id}`);
  };
  return (
    <div class="card w-lg-max shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body p-4">
        <h2 class="card-title text-center text-secondary flex align-center justify-center">
          {name}
        </h2>
        <hr className="border border-5" />
        <p class="text-secondary">Minimum Purchase Quantity : {minQuantity}</p>
        <hr className="border border-5" />
        <p class="text-secondary">Available Quantity : {availableQuantity}</p>
        <hr />
        <p class="text-secondary">Price : {price}</p>

        <hr className="border border-5" />
        <p class="text-secondary">{description}</p>
        <div class="card-actions justify-center mt-3">
          <button
            onClick={() => togglePurchase(_id)}
            class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowParts;
