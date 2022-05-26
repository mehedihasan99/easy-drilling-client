import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddProduct.css";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://gentle-river-04841.herokuapp.com/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Product added successfully");
        navigate("/dashboard/manageOrderProducts");
      });
  };
  return (
    <div>
      <div className="add-products mx-auto mt-5 ">
        <h2 className="text-center text-primary text-2xl md:text-3xl mb-4">
          Add New Product
        </h2>
        <form
          className="border-2 p-5 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input placeholder="Photo Url" {...register("image")} required />
          <input
            placeholder="Email"
            value={user.email}
            {...register("email")}
            readOnly
            required
          />
          <input
            placeholder="Product Name"
            {...register("productName", { required: true, maxLength: 20 })}
            required
          />
          <input
            placeholder="Price"
            type="number"
            {...register("price")}
            required
          />
          <input
            placeholder="Available Quantity"
            type="number"
            {...register("availableQuantity")}
            required
          />
          <input
            type="number"
            placeholder="Minimum Quantity"
            {...register("minimumQuantity")}
            required
          />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
