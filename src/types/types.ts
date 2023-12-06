import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface CustomLinkProps {
  path: string;
  text: string;
  icons?: ReactNode;
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

export interface LoginInput {
  email: string;
  password: string;
}
