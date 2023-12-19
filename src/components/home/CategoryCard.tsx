import { CategoryCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white/25 mask mask-parallelogram-4 px-4 py-10 w-48 text-theme-color-400 border-[10px] border-b-theme-color-100">
      <Image
        src={category.image}
        alt={`${category.category} image`}
        width={96}
        height={96}
      />
      <h2 className="text-xl font-semibold">{category.category}</h2>
    </div>
  );
};

export default CategoryCard;
