import { IUser } from "@/types/types";
import moment from "moment";
import Image from "next/image";
import React from "react";

const UsersTr = ({ user }: { user: IUser }) => {
  const { _id, name, email, photo, role, created_at } = user;
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
      <td>{role}</td>
      <td>{moment(created_at).startOf("day").fromNow()}</td>
      <td>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-gradient-to-br text-white hover:brightness-90 from-theme-color-200 to-theme-color-400"
          >
            Update Role
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Basic</a>
            </li>
            <li>
              <a>Operator</a>
            </li>
            <li>
              <a>Manager</a>
            </li>
            <li>
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
