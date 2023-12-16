"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginInputs } from "@/types/types";
import useAuthInfo from "@/hooks/useAuthInfo";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/utils";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loading, setLoading } = useAuthInfo();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>();

  const loginHandler: SubmitHandler<LoginInputs> = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result: UserCredential) => {
        toast.success(`👋🏻 welcome ${result?.user?.displayName}`);
        router.push("/");
      })
      .catch((err: FirebaseError) => {
        const errorCode = err.code;
        const message = errorCode.replace(/auth\//, "").replace(/-/g, " ");
        const errorMessage = capitalizeFirstLetter(message);
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(loginHandler)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
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
            {...register("password")}
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
        <button className="btn btn-accent rounded">
          {loading ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
