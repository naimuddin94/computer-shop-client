"use client";
import { CustomLinkProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLink = ({ path, text }: CustomLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`px-4 py-2 rounded font-medium text-center  ${
        pathName === path
          ? "text-theme-color-400 bg-gradient-to-tl from-theme-yellow to-theme-secondary cursor-not-allowed"
          : "bg-gradient-to-tl from-theme-color-400 to-theme-color-200 text-white hover:from-theme-color-300"
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default DashboardLink;
