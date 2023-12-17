"use client";
import useAuthInfo from "@/hooks/useAuthInfo";
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
  const { googleLogin, setLoading, setUsername, setPhoto } = useAuthInfo();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result: UserCredential) => {
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const photo = result?.user?.photoURL;
        axiosSecure
          .post("/users/create-user", { name, email, photo })
          .then((res) => {
            setUsername(name);
            setPhoto(photo);
            toast.success(`👋🏻 welcome ${result?.user?.displayName}`);
            router.push("/");
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
          });
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
