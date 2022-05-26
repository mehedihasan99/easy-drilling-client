import React, { useEffect, useState } from "react";

const CustomersOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://gentle-river-04841.herokuapp.com/purchase", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index}</th>
                <td>{order.customerName}</td>
                <td>{order.customer}</td>
                <td>{order.purchase}</td>
                <td>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersOrder;
