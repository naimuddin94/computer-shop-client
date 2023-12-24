import { categoryData } from "@/lib/bannerData";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="flex items-center justify-between px-4 py-5 gap-8 relative overflow-hidden bg-gradient-to-t gradient-color">
      {categoryData.map((category) => (
        <CategoryCard key={category.category} category={category} />
      ))}
    </div>
  );
};

export default Category;
