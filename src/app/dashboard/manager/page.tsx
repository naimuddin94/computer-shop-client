import UsersTable from "@/components/allUsers/UsersTable";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IUser } from "@/types/types";
import React from "react";

const ManagerPage = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure("/users");
  const users: IUser[] = response.data;
  const managers = users.filter((user) => user.role === "manager");
  return (
    <div>
      <UsersTable users={managers} />
    </div>
  );
};

export default ManagerPage;
