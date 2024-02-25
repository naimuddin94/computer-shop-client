"use client";
import { ChildrenProps } from "@/types/types";
import { redirect } from "next/navigation";
import Loading from "../shared/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { setUser, toggleLoading } from "@/redux/features/userSlice";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const dispatch = useDispatch();
  const { isLoading, email } = useSelector((state: RootState) => state.user);

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
  
  if (isLoading) {
    return <Loading />;
  }

  if (!email) {
    return redirect("/login");
  }
  return children;
};

export default PrivateRoute;
