"use client";
import InputField from "../utility/InputField";
import PasswordField from "../utility/PasswordField";
import { FormEvent } from "react";

const LoginForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        fieldName="email"
        label="Email"
        inputType="email"
        placeholder="enter your email address"
      />
      <PasswordField text="New to here?" path="/register" urlName="Register" />
      <div className="form-control mt-6">
        <button className="btn btn-accent rounded">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
