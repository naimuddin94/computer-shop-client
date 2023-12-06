"use client";
import { PasswordFieldProps } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordField = ({ text, path, urlName }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="type your password"
          className="input input-bordered rounded w-full"
          required
        />
        {showPassword ? (
          <FaEye
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[28%] text-xl cursor-pointer"
          />
        ) : (
          <FaEyeSlash
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[28%] text-xl cursor-pointer"
          />
        )}
      </div>
      <label className="label">
        <span className="label-text-alt">
          {text}
          <Link href={path} className="link link-hover ml-2">
            {urlName}
          </Link>
        </span>
      </label>
    </div>
  );
};

export default PasswordField;
