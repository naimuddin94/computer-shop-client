"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IUser } from "@/types/types";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UsersTr = ({ user }: { user: IUser }) => {
  const { _id, name, email, photo, role: userRole, created_at } = user;
  const [role, setRole] = useState(userRole);
  const axiosSecure = useAxiosSecure();
  const handleRole = (role: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Update the user role to ${role}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/users/${_id}`, { role }).then((res) => {
          setRole(role);
          toast.success(res.data.message);
        });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-circle w-12 h-12">
              <Image src={photo} alt={name} width={48} height={48} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{role.toUpperCase()}</td>
      <td>{moment(created_at).startOf("day").fromNow()}</td>
      <td>
        <div className="dropdown dropdown-left dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded bg-gradient-to-br text-white hover:brightness-90 from-theme-color-200 to-theme-color-400"
          >
            Update Role
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 text-white menu p-2 shadow bg-base-100 rounded w-52 bg-gradient-to-tr from-theme-color-200 to-theme-color-400"
          >
            <li onClick={() => handleRole("basic")}>
              <a>Basic</a>
            </li>
            <li onClick={() => handleRole("operator")}>
              <a>Operator</a>
            </li>
            <li onClick={() => handleRole("manager")}>
              <a>Manager</a>
            </li>
            <li onClick={() => handleRole("admin")}>
              <a>Admin</a>
            </li>
          </ul>
        </div>
      </td>
      <td>
        <button className="btn text-white hover:brightness-90 bg-theme-color-200/10">
          ❌
        </button>
      </td>
    </tr>
  );
};

export default UsersTr;
