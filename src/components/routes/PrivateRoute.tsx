import useAuthInfo from "@/hooks/useAuthInfo";
import { ChildrenProps } from "@/types/types";
import { redirect } from "next/navigation";
import Loading from "../shared/Loading";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { user, loading } = useAuthInfo();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return redirect("/login");
  }
  return children;
};

export default PrivateRoute;
