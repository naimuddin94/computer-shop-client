"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { handleFirebaseError } from "@/lib/customLibery";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const handleGoogleLogin = () => {
    
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-neutral btn-block rounded mt-2"
    >
      <FaGoogle />
      Login with Google
    </button>
  );
};

export default SocialLogin;
