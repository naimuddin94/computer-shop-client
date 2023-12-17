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
            <div className="mask mask-squircle w-12 h-12">
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
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default UsersTr;
