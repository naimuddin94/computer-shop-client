"use client";
import useAuthInfo from "@/hooks/useAuthInfo";
import CustomLink from "./CustomLink";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

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
      <Link href="/cart" className="flex">
        <MdOutlineShoppingCart size={25} className="text-theme-yellow" />
        <sup className="text-base text-theme-color-400">0</sup>
      </Link>
    </>
  );
};

export default NavItems;
