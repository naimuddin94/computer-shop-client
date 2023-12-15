"use client";
import { auth } from "@/firebase/firebase.config";
import { IAuthContext, ReactNodeProps } from "@/types/types";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<IAuthContext | null | any>(null);

const AuthProviders = ({ children }: ReactNodeProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unSubscribed();
    };
  }, []);

  console.log(user);

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

  const authInfo = {
    user,
    username,
    setUsername,
    photo,
    setPhoto,
    role,
    loading,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
