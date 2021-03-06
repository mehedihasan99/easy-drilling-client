import React from "react";

const Tool = ({ tool }) => {
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
      <div className="card mb-10  w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h2 className="card-title text-1xl">
            Available Quantity: {availableQuantity}
          </h2>
          <h2 className="card-title text-1xl">
            Minimum Order Quantity: {minimumOrderQuantity}
          </h2>
          <h2 className="card-title text-1xl">Price: {price}</h2>
          <div className="card-actions justify-end">
            {/* <label
              onClick={() => setPurchase(tool)}
              className="btn btn-primary"
              htmlFor="purchase-modal"
              btn
              modal-button
            >
              purchase
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
