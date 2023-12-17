import { UserTableProps } from "@/types/types";
import React from "react";
import UsersTr from "./UsersTr";

const UsersTable = ({ users }: UserTableProps) => {
  return (
    <div>
      <div>
        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr>
              <th>Person Information</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Role Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UsersTr key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
