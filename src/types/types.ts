import { ReactNode } from "react";

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
  type?: string;
  name: string;
  placeholder: string;
  styles?: string;
}
