import { IAuthContext, ReactNodeProps } from "@/types/types";
import { createContext, useState } from "react";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProviders = ({ children }: ReactNodeProps) => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const authInfo = { username, photo, role, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
