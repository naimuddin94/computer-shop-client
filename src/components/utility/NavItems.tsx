"use client";
import useAuthInfo from "@/hooks/useAuthInfo";
import CustomLink from "./CustomLink";

const NavItems = () => {
  const { user } = useAuthInfo();
  return (
    <>
      <CustomLink path="/" text="Home" />
      <CustomLink path="/products" text="Products" />
      <CustomLink path="/addProduct" text="Add Products" />
      <CustomLink path="/contact" text="Contact" />
      <CustomLink path="/dashboard" text="Dashboard" />
      {!user && <CustomLink path="/login" text="Login" />}
    </>
  );
};

export default NavItems;
