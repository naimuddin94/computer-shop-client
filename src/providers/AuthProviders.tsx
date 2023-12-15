import { auth } from "@/firebase/firebase.config";
import { IAuthContext, ReactNodeProps } from "@/types/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useState } from "react";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProviders = ({ children }: ReactNodeProps) => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  // user create with email and password
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { username, photo, role, loading, createUser, loginUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
