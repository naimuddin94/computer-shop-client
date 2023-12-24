import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IProduct } from "@/types/types";
import React from "react";
import Card from "../shared/Card";

const Products = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure.get("/products");
  const products: IProduct[] = response.data;

  return (
    <div>
      <div className="flex gap-4 flex-col md:flex-row flex-wrap justify-center my-8">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
