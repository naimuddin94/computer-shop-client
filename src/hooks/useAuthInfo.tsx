import { AuthContext } from "@/providers/AuthProviders";
import { useContext } from "react";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
