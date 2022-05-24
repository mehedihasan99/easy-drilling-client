import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    description,
    image,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = tool;
  const navigate = useNavigate();
  const goToPurchases = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <div class="card mb-10  w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <h2 class="card-title text-1xl">
            Available Quantity: {availableQuantity}
          </h2>
          <h2 class="card-title text-1xl">
            Minimum Order Quantity: {minimumOrderQuantity}
          </h2>
          <h2 class="card-title text-1xl">Price: {price}</h2>
          <div class="card-actions justify-end">
            <label
              onClick={() => goToPurchases(_id)}
              class="btn btn-primary"
              for="purchase-modal"
              btn
              modal-button
            >
              purchase
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
