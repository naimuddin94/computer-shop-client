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
        pathName === path ? "bg-theme-secondary" : "text-white hover:bg-theme-secondary/20"
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
