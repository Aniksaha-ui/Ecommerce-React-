import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import ShowOrders from "./ShowOrders";
const ManageOrder = () => {
  const [deletingOrder, setOrderDelete] = useState(null);

  const {
    data: purchases,
    isLoading,
    refetch,
  } = useQuery("purchases", () =>
    fetch("http://manufactureing.sahacompany.site/purchase", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">ALL Purchases : {purchases.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Parts Name</th>
              <th>User Name</th>
              <th>quantity</th>
              <th>Unit Price</th>
              <th>total price</th>
              <th>Paid Status</th>
              <th>Status</th>
              <th>Payment Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <ShowOrders
                key={purchase._id}
                purchase={purchase}
                refetch={refetch}
                setOrderDelete={setOrderDelete}
              ></ShowOrders>
            ))}
          </tbody>
        </table>
      </div>

      {deletingOrder && (
        <DeleteOrderModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setOrderDelete={setOrderDelete}
        ></DeleteOrderModal>
      )}
    </div>
  );
};

export default ManageOrder;
