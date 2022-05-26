import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [manageProducts, setManageProduct] = useState([]);
  useEffect(() => {
    fetch("https://gentle-river-04841.herokuapp.com/addProduct")
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, []);
  return (
    <div className="mb-10 mt-4">
      <h2 className=" text-2xl md:text-3xl font-bold text-center text-primary mb-5 ">
        Manage Product:{manageProducts.length}
      </h2>
      <div className="grid grid-col-1 gap-3 md:grid-cols-2   lg:grid-cols-3">
        {manageProducts.map((manageProduct) => (
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img src={manageProduct.image} alt="product" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{manageProduct.productName}</h2>
              <p></p>
              <h2>Available Quantity:{manageProduct.availableQuantity}</h2>
              <h2>Minimum Order Quantity:{manageProduct.minimumQuantity}</h2>
              <h2>Price:{manageProduct.price}</h2>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrder;
