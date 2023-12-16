import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const handleFirebaseError = (error: FirebaseError) => {
  const message = error.code.replace(/auth\//, "").replace(/-/g, " ");
  const errorMessage = capitalizeFirstLetter(message);
  toast.error(errorMessage);
};
