import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IProduct } from "@/types/types";
import { Headline } from "..";
import Card from "../shared/Card";

const AllProducts = async () => {
  const axiosSecure = useAxiosSecure();
  const response = await axiosSecure.get("/products");
  const products: IProduct[] = response.data;

  return (
    <div>
      <Headline text="Products" />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-4">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
