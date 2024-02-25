"use client";

import { auth } from "@/firebase/firebase.config";
import { setUser, toggleLoading } from "@/redux/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

const InitialUserSet = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  // set user initial loading
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, []);

  return children;
};

export default InitialUserSet;
