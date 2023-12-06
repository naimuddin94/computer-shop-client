import Link from "next/link";
import CustomLink from "./CustomLink";

const NavItems = () => {
  return (
    <>
      <CustomLink path="/" text="Home" />
      <CustomLink path="/products" text="Products" />
      <CustomLink path="/contact" text="Contact" />
      <CustomLink path="/dashboard" text="Dashboard" />
      <CustomLink path="/login" text="Login" />
    </>
  );
};

export default NavItems;
