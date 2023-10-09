import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeletePurchaseModal from "./DeletePurchaseModal";

const MyPurchase = () => {
  const [purchase, setPurchase] = useState([]);
  const [user] = useAuthState(auth);
  const [deletingPurchase, setPurchaseDelete] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `http://manufactureing.sahacompany.site/mypurchse?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          return res.json();
        })
        .then((data) => {
          setPurchase(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>My Purchase: {purchase.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>User Name</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>unit price</th>
              <th>Total Amount</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {purchase.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.username}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.quantity * order.price}</td>
                <td>{order.phone}</td>
                <td>
                  {order.price && !order.paid && (
                    <>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-success">
                          payment
                        </button>
                      </Link>

                      <label
                        onClick={() => setPurchaseDelete(order)}
                        for="delete-confirm-modal"
                        class="btn btn-xs btn-error"
                      >
                        Delete
                      </label>
                    </>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                        (paid)
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingPurchase && (
        <DeletePurchaseModal
          deletingPurchase={deletingPurchase}
          setPurchaseDelete={setPurchaseDelete}
        ></DeletePurchaseModal>
      )}
    </div>
  );
};

export default MyPurchase;
