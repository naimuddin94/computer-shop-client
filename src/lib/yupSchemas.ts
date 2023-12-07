import { LoginForm } from "@/components";
import * as yup from "yup";

export const RegisterSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(3)
    .max(20)
    .matches(/^[^\d]+$/, "Name cannot include numbers")
    .label("Name"),
  photoFile: yup
    .mixed()
    .test("fileSize", "File size too large", (value: any) => {
      if (!value || !("length" in value) || value.length === 0) {
        return true;
      }
      const file = value[0];
      const maxSize = 1 * 1024 * 1024; // 1 MB
      return file.size <= maxSize;
    }),
  email: yup.string().email().required().max(40).label("Email"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(/^\S*$/, "Password cannot contain spaces")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .label("Password"),
});
