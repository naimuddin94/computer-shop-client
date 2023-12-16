"use client";
import { auth } from "@/firebase/firebase.config";
import { IAuthContext, ReactNodeProps } from "@/types/types";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<IAuthContext | null | any>(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }: ReactNodeProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | undefined | null>(null);
  const [photo, setPhoto] = useState<string | undefined | null>(null);
  const [role, setRole] = useState<string | undefined | null>(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setUsername(currentUser?.displayName);
      setPhoto(currentUser?.photoURL);
    });

    return () => {
      return unSubscribed();
    };
  }, []);

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

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logoutUser = () => {
    setPhoto("");
    setUsername("");
    setRole("");
    return signOut(auth);
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
    logoutUser,
    setLoading,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
