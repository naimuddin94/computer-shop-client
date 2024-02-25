"use client";
import CustomLink from "./CustomLink";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const NavItems = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <CustomLink path="/" text="Home" />
      <CustomLink path="/products" text="Products" />
      <CustomLink path="/addProduct" text="Add Products" />
      <CustomLink path="/contact" text="Contact" />
      <CustomLink path="/dashboard" text="Dashboard" />
      {!user?.email && <CustomLink path="/login" text="Login" />}
      <Link href="/cart" className="flex">
        <MdOutlineShoppingCart size={25} className="text-theme-color-200" />
        <sup className="text-base text-theme-color-400">0</sup>
      </Link>
    </>
  );
};

export default NavItems;
