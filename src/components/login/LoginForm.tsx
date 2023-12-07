"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="enter your email address"
          className="input input-bordered rounded"
          required
        />
      </div>
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
            New to here?
            <Link href="/register" className="link link-hover ml-2">
              Register
            </Link>
          </span>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-accent rounded">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
