import React from "react";

const ShowParts = ({ part, refetch, setPartsDelete }) => {
  const { _id, name, price, minQuantity } = part;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{minQuantity}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setPartsDelete(part)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ShowParts;
