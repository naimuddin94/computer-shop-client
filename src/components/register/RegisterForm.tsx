"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordField from "../utility/PasswordField";
import InputField from "../utility/InputField";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form>
      <InputField
        label="Name"
        placeholder="enter your full name"
        fieldName="name"
      />
      <InputField
        label="Name"
        inputType="file"
        placeholder="enter your full name"
        fieldName="photo"
        styles="file-input file-input-bordered file-input-accent rounded w-full"
      />
      <InputField
        label="Email"
        placeholder="enter your email address"
        inputType="email"
        fieldName="email"
      />
      <PasswordField
        text="Already have an account?"
        path="/login"
        urlName="Login"
      />
      <div className="form-control mt-6">
        <button className="btn btn-accent rounded">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
