import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [parts, setParts] = useState({});
  const descriptionRef = useRef("");
  const partsNameRef = useRef("");
  const ratingRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.description = descriptionRef.current.value;
    data.partsName = partsNameRef.current.value;
    data.rating = ratingRef.current.value;
    data.user = user.displayName;

    fetch("http://manufactureing.sahacompany.site/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Thanks for your review");
        } else {
          toast.error("Failed to add you review");
        }
      });
  };

  return (
    <>
      <h3 className="text-center text-3xl">{user.displayName}</h3>
      <h3 className="text-center text-3xl">{user.email}</h3>
      <div class="flex justify-center mt-20">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Review</h2>

            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter Parts name"
                  ref={partsNameRef}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter Rating"
                  ref={ratingRef}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>

              <div className="form-control w-96 max-w-xs">
                <label className="label"></label>
                <textarea
                  type="text"
                  ref={descriptionRef}
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                ></textarea>
              </div>

              <br />
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Purchase"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;
