import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeletePartsModal from "./DeletePartsModel";
import ShowParts from "./ShowParts";

const ManageParts = () => {
  const [deletingParts, setPartsDelete] = useState(null);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("http://manufactureing.sahacompany.site/admin/parts", {
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
      <h2 className="text-2xl">Total Parts : {parts.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Parts Name</th>
              <th>Minimum Purchase Quantity</th>
              <th>Available Quantity</th>
              <th>Unit Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <ShowParts
                key={part._id}
                part={part}
                refetch={refetch}
                setPartsDelete={setPartsDelete}
              ></ShowParts>
            ))}
          </tbody>
        </table>
      </div>

      {deletingParts && (
        <DeletePartsModal
          deletingParts={deletingParts}
          refetch={refetch}
          setPartsDelete={setPartsDelete}
        ></DeletePartsModal>
      )}
    </div>
  );
};

export default ManageParts;
