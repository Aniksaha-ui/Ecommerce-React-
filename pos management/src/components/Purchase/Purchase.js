import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const param = useParams();
  const id = param.id;
  const [parts, setParts] = useState({});
  const navigate = useNavigate();
  const nameRef = useRef("");
  const quantityRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  useEffect(() => {
    const getParts = async () => {
      const email = user.email;
      const url = `http://manufactureing.sahacompany.site/parts/${id}?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setParts(data);
      } catch (error) {
        // console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getParts();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = nameRef.current.value;
    data.quantity = quantityRef.current.value;
    data.username = user.displayName;
    data.address = addressRef.current.value;
    data.phone = phoneRef.current.value;
    data.email = user.email;
    data.price = parts.price;
    console.log(data);
    if (data.quantity < parts.minQuantity) {
      toast.error(`Minimum purchase qunantity is ${parts.minQuantity}`);
      return;
    } else {
    }
    if (data.quantity > parts.availableQuantity) {
      toast.error(`Not in stock this amount`);
      return;
    } else {
      fetch("http://manufactureing.sahacompany.site/purchase", {
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
            toast.success(
              "Product purchase successfully.Please payment from you Dashboard"
            );
          } else {
            toast.error("Failed to add the doctor");
          }
        });
    }
  };

  return (
    <>
      <h3 className="text-center text-3xl">{user.displayName}</h3>
      <h3 className="text-center text-3xl">{user.email}</h3>
      <div class="flex justify-center mt-20">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              Are You want to purchase <br /> {parts.name}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-control w-96 max-w-xs">
                <label className="label"></label>
                <input
                  type="text"
                  ref={nameRef}
                  value={parts.name}
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  disabled="true"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter amount"
                  ref={quantityRef}
                  value={parts.minQunatity}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter your address"
                  ref={addressRef}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  ref={phoneRef}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
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

export default Purchase;
