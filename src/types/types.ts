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
