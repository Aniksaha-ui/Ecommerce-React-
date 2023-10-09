import React from "react";
import { toast } from "react-toastify";

const ShowOrders = ({ purchase, refetch, setOrderDelete }) => {
  const { _id, name, quantity, username, price, paid, transactionId, status } =
    purchase;

  const handleUpdateStatus = (id) => {
    const data = {};
    data.status = "delivered";
    fetch(`http://manufactureing.sahacompany.site/purchase/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.acknowledged === true) {
          toast(`Delivered successfully`);
        }
      });
  };

  // console.log(purchase);

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{quantity * price}</td>
      <td>{paid ? "paid" : "unpaid"}</td>
      <td>{status ? status : "pending"}</td>
      <td>{transactionId}</td>

      <td>
        {price && !paid && (
          <>
            <label
              onClick={() => setOrderDelete(purchase)}
              for="delete-confirm-modal"
              class="btn btn-xs btn-error"
            >
              Delete
            </label>
          </>
        )}
        {price && paid && (
          <div>
            <button
              className="btn btn-xs btn-error"
              onClick={() => handleUpdateStatus(_id)}
            >
              Update
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ShowOrders;
