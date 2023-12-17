import UsersTable from "@/components/allUsers/UsersTable";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IUser } from "@/types/types";
import React from "react";

const AllUsersPage = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure("/users");
  const users: IUser[] = response.data;
  return (
    <div>
      <UsersTable users={users} />
    </div>
  );
};

export default AllUsersPage;
