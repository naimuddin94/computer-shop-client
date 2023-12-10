"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterSchema } from "@/lib/yupSchemas";



interface RegisterInputs extends yup.Asserts<typeof RegisterSchema> {}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="enter your name"
          className="input input-bordered rounded"
        />
      </div>
      {errors.name && (
        <p className="text-theme-color-200 mt-1 text-sm">
          {errors.name.message}
        </p>
      )}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Profile Picture</span>
        </label>
        <input
          {...register("photoFile")}
          type="file"
          accept=".jpeg, .png, .jpg"
          className="file-input file-input-bordered file-input-accent rounded w-full"
        />
      </div>
      {errors.photoFile && (
        <p className="text-theme-color-200 mt-1 text-sm">
          {errors.photoFile.message}
        </p>
      )}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="enter your email address"
          className="input input-bordered rounded"
        />
      </div>
      {errors.email && (
        <p className="text-theme-color-200 mt-1 text-sm">
          {errors.email.message}
        </p>
      )}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="type your password"
            className="input input-bordered rounded w-full"
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
        {errors.password && (
          <p className="text-theme-color-200 mt-1 text-sm">
            {errors.password.message}
          </p>
        )}
        <label className="label">
          <span className="label-text-alt">
            Already have an account?
            <Link href="/login" className="link link-hover ml-2">
              Login
            </Link>
          </span>
        </label>
      </div>

      <div className="form-control mt-6">
        <button className="btn btn-accent rounded">
          {isSubmitting ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;