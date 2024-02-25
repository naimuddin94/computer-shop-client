"use client";
import { ChildrenProps } from "@/types/types";
import { redirect } from "next/navigation";
import Loading from "../shared/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { isLoading, email } = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return <Loading />;
  }

  if (!email) {
    return redirect("/login");
  }
  return children;
};

export default PrivateRoute;
