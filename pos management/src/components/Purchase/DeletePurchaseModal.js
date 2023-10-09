import React from "react";
import { toast } from "react-toastify";

const DeletePurchaseModal = ({ deletingPurchase, setPurchaseDelete }) => {
  //   console.log("deleting purchase", deletingPurchase);
  const { name, _id } = deletingPurchase;
  //   console.log(_id);
  const handleDelete = () => {
    fetch(`http://manufactureing.sahacompany.site/purchase/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Purchase Deleted`);
          setPurchaseDelete(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete?
          </h3>
          <p class="py-4">
            If you delete then you will not show this parts again?
          </p>
          <div class="modal-action">
            <button onClick={handleDelete} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePurchaseModal;
