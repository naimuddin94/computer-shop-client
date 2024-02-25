import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IProduct } from "@/types/types";
import Card from "../shared/Card";
import { Button, Headline } from "..";

const Products = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure.get("/products");
  const products: IProduct[] = response.data;

  return (
    <div>
      <Headline text="Products" />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-4">
        {products?.slice(0, 6).map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div className="py-5 text-center">
        <Button text="All Products" />
      </div>
    </div>
  );
};

export default Products;
