import { IProduct, IProductDetailsProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const page = async ({ params }: IProductDetailsProps) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );
  const product: IProduct = await response.json();
  console.log(product);

  return (
    <div className="px-5 md:px-10">
      <div className="flex gap-5">
        <div className="flex-1 grid gap-4 grid-cols-2">
          <div className="col-span-2 flex justify-center">
            <Image
              src={product.images[0]}
              alt="product image"
              width={500}
              height={300}
            />
          </div>
          <div>
            <Image
              src={product.images[1]}
              alt="product image"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src={product.images[2]}
              alt="product image"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default page;
