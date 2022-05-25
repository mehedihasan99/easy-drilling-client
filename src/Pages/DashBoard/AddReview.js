import React from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const AddReview = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("user-added successfully");
        navigate("/");
      });
  };
  return (
    <div className="flex mt-5 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="text-2xl mb-4 text-center text-sky-700">
          Add Your Review
        </h2>
        <div className="card-body border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user.email}
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                required
                className="input input-bordered w-full max-w-xs"
                {...register("textarea", {
                  minLength: {
                    value: 250,
                    message: "Must be 250 character",
                  },
                })}
              />
            </div>
            <input
              className="btn btn-primary mt-5 w-full max-w-xs"
              type="submit"
              value="Add Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
