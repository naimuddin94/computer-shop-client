import useAxiosSecure from "@/hooks/useAxiosSecure";
import React from "react";

const AllUsersPage = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure("/users");
  const users = response.data;
  return <div>All users: {users.length}</div>;
};

export default AllUsersPage;
