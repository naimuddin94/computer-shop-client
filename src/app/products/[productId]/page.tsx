import { Button } from "@/components";
import { IProduct, IProductDetailsProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

const page = async ({ params }: IProductDetailsProps) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );
  const product: IProduct = await response.json();

  return (
    <div className="px-5 py-2 md:px-10 md:py-5 text-theme-color-400">
      <button className="hover:scale-105 duration-300 bg-theme-color-400/5 px-5 py-1 rounded-full">
        <FaArrowLeftLong size={23} />
      </button>
      <div className="flex gap-8">
        <div className="flex-1 grid gap-4 grid-cols-2">
          <div className="col-span-2 bg-theme-color-400/5 rounded flex justify-center">
            <Image
              src={product.images[0]}
              alt="product image"
              width={350}
              height={200}
            />
          </div>
          <div className="bg-theme-color-400/5 rounded flex justify-center">
            <Image
              src={product.images[1]}
              alt="product image"
              width={200}
              height={130}
            />
          </div>
          <div className="bg-theme-color-400/5 rounded flex justify-center">
            <Image
              src={product.images[2]}
              alt="product image"
              width={200}
              height={130}
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="px-2 py-1 bg-theme-color-400/5 w-fit rounded">
            {product.category}
          </h3>
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          <div>
            {product.features.map((feature) => (
              <h4
                key={feature}
                className="flex gap-1 text-theme-color-300 mt-2"
              >
                <GiCheckMark className="text-lg text-theme-color-400" />
                {feature}
              </h4>
            ))}
          </div>
          <div className="pt-5 space-y-2">
            <h3 className="px-2 py-1 bg-theme-color-400/5 w-fit rounded">
              Brand: {product.brand}
            </h3>
            <h1 className="text-5xl font-semibold">${product.price}</h1>
            <p className="py-5 text-sm">{product.description}</p>
          </div>
          <div>
            <Button text="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
