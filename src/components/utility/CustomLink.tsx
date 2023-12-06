"use client";
import { CustomLinkProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, text }: CustomLinkProps) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`px-4 py-2 rounded font-medium ${
        pathName === path
          ? "bg-theme-color-100 text-white"
          : "text-theme-color-200 hover:bg-theme-color-400/20"
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
