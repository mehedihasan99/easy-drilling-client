import React from "react";

const Tool = ({ tool, setPurchase }) => {
  const {
    name,
    description,
    image,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = tool;
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
              onClick={() => setPurchase(tool)}
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
