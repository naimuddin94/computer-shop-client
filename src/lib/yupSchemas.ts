import { LoginForm } from "@/components";
import { brands, categories } from "@/utils/utils";
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

export const AddProductSchema = yup.object({
  name: yup.string().required().label("Name"),
  images: yup
    .mixed()
    .test("imagesLength", "You need select 3 images", (value: any) => {
      if (value.length === 3) return true;
      return false;
    })
    .test(
      "fileSize",
      "Every image should be smaller than 1 MB",
      (value: any) => {
        if (!value || !("length" in value) || value.length === 0) {
          return true;
        }

        let result = true;
        const maxSize = 1024 * 1024; // 1 MB
        const files = Object.values(value);

        files.forEach((file: any) => {
          if (file?.size > maxSize) {
            result = false;
          }
        });
        return result;
      }
    )
    .label("Images"),
  brand: yup
    .string()
    .oneOf(brands, "You have to select brand name")
    .required()
    .label("Brand"),
  category: yup
    .string()
    .oneOf(categories, "You have to select category")
    .required()
    .label("Category"),
  price: yup
    .number()
    .typeError("Price must be a valid number")
    .positive()
    .label("Price"),
  features: yup
    .string()
    .max(200, "Features must be at most 200 characters")
    .required()
    .test(
      "check-features",
      "Features should have at least four sections separated by commas, with each section having at least 10 characters",
      (value) => {
        if (!value) return false;
        const sections = value.split(",");
        const minCharacters = 10;
        const minSection = 4;
        if (sections.length < minSection) return false;

        const validSection = sections.filter(
          (section) => section.trim().length > minCharacters
        );
        return validSection.length >= minSection;
      }
    )
    .label("Features"),
  description: yup
    .string()
    .required()
    .min(200, "Description must be at least 200 character")
    .max(800, "Description must be at most 800 characters")
    .label("Description"),
});
