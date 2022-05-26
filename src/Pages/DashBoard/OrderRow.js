import React from "react";
import { toast } from "react-toastify";

const OrderRow = ({ order, index, refetch }) => {
  //   console.log(order);
  const { customer, purchase } = order;
  const handleDelete = (customer) => {
    fetch(`http://localhost:5000/order/${customer}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert(`${purchase} Deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.customer}</td>
      <td>{order.purchase}</td>
      <td>{order.quantity}</td>
      <td>
        <button
          onClick={() => handleDelete(customer)}
          class="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
