import React from "react";
import Header from "../layout/Header";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  address,
  email,
  phone,
  website,
  company,
}) => {
  return (
    <div className=" flex flex-col gap-2 w-full my-6 p-6 bg-white cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold text-gray-800">Name</span>
        <span className="text-gray-600">Id:{id}</span>
        <span className="text-gray-600">Name:{name}</span>
        <span className="text-gray-600">Username:{username}</span>
        <span className="text-gray-600">Email:{email}</span>
        <span className="text-gray-600">Address:{address.street}</span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Phone:{phone}</span>
        <span>Website:{website}</span>
        <span>Company:{company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;
