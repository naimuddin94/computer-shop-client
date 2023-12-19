import { User, UserCredential } from "firebase/auth";
import { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface CustomLinkProps {
  path: string;
  text: string;
}

export interface PasswordFieldProps {
  text: string;
  path: string;
  urlName: string;
}

export interface InputFieldProps {
  label: string;
  inputType?: string;
  fieldName: string;
  placeholder: string;
  styles?: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface FormNavigationProps {
  currentStep: number;
}

interface Steps {
  id: string;
  name: string;
  fields: string[];
}

export interface NavigationProps {
  prev: () => void;
  currentStep: number;
  next: () => void;
  steps: Array<Steps>;
}

export interface IImages {
  name: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
  size: number;
  type: string;
}

export interface ReactNodeProps {
  children: ReactNode;
}

export interface IAuthContext {
  user: User | null;
  username: string | undefined | null;
  setUsername: (name: string | undefined | null) => void;
  photo: string | undefined | null;
  setPhoto: (photo: string | undefined | null) => void;
  role: string;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  logoutUser: () => Promise<void>;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  created_at: Date;
}

export interface UserTableProps {
  users: IUser[];
}

export interface AdvantageCardProps {
  text: string;
  Icon: ElementType;
}

export interface CategoryCardProps {
  category: { image: StaticImageData; category: string };
}
