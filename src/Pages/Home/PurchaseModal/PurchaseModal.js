import React from "react";

const PurchaseModal = ({ Purchase, setPurchase }) => {
  const { name, availableQuantity, minimumOrderQuantity } = Purchase;
  const handleSubmit = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    console.log(quantity);
    setPurchase(null);
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" class="modal-toggle" />
      <div onSubmit={handleSubmit} class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="purchase-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-primary text-center text-lg my-5">
            Purchase Item: {name}
          </h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              name="name"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Your address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Purchase"
              class="btn btn-primary input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
