"use client";
import useAuthInfo from "@/hooks/useAuthInfo";
import { handleFirebaseError } from "@/lib/customLibery";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const router = useRouter();
  const { googleLogin, setLoading, setUsername, setPhoto } = useAuthInfo();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result: UserCredential) => {
        setUsername(result?.user?.displayName);
        setPhoto(result?.user?.photoURL);
        toast.success(`👋🏻 welcome ${result?.user?.displayName}`);
        router.push("/");
      })
      .catch((err: FirebaseError) => {
        handleFirebaseError(err);
        setLoading(false);
      });
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
