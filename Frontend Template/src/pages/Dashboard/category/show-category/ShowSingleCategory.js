const ShowSingleCategory = ({ category }) => {
  console.log(category);
  return (
    <tr className="hover">
      <th className="border border-slate-300">{category._id}</th>
      <td className="border border-slate-300">{category.name}</td>
      <td className="border border-slate-300">
        <div className="btn btn-info">Edit</div>&nbsp;&nbsp;&nbsp;
        <div className="btn btn-accent">Delete</div>
      </td>
    </tr>
  );
};

export default ShowSingleCategory;
