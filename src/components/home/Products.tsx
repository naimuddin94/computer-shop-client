import useAxiosSecure from "@/hooks/useAxiosSecure";
import React from "react";

const Products = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure.get("/products");
  const products = response.data;
  console.log(products);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum facere
      consectetur delectus fugiat assumenda magni possimus atque blanditiis,
      explicabo voluptatum ea quibusdam est veniam excepturi adipisci, eos quos?
      Sed?
    </div>
  );
};

export default Products;
