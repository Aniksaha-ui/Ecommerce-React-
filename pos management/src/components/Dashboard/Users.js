import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ShowUsers from "./ShowUsers";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://manufactureing.sahacompany.site/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ShowUsers
                key={user._id}
                user={user}
                refetch={refetch}
              ></ShowUsers>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
