import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseModal = ({ Purchase, setPurchase }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, availableQuantity, minimumOrderQuantity } = Purchase;
  const handleSubmit = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.quantity.value);
    const mainQuantity = parseInt(availableQuantity);

    if (minimumOrderQuantity < quantity && mainQuantity > quantity) {
      const purchase = {
        purchaseId: _id,
        purchase: name,
        quantity,
        customer: user.email,
        customerName: user.displayName,
        address: event.target.address.value,
        phone: event.target.phone.value,
      };
      fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchase),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully Purchases");
          setPurchase(null);
        });
    } else {
      toast.error(
        "Full-fill the condition about available quantity and minimum order quantity"
      );
      setPurchase(null);
    }
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div
        onSubmit={handleSubmit}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-center text-lg my-5">
            Purchase Item: {name}
          </h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Your address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Purchase"
              className="btn btn-primary input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
