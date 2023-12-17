import UsersTable from "@/components/allUsers/UsersTable";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IUser } from "@/types/types";
import React from "react";

const AdminPage = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure("/users");
  const users: IUser[] = response.data;
  const admin = users.filter((user) => user.role === "admin");
  return (
    <div>
      <UsersTable users={admin} />
    </div>
  );
};

export default AdminPage;
