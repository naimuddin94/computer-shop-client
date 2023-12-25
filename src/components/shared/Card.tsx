import { sliceDescription } from "@/lib/customLibery";
import { GiCheckMark } from "react-icons/gi";

import { IProduct } from "@/types/types";
import Image from "next/image";

const Card = ({ product }: { product: IProduct }) => {
  const { _id, name, price, brand, category, features, images } = product;
  return (
    <div className="card card-compact bg-white hover:shadow-xl duration-500 cursor-pointer rounded text-theme-color-400">
      <figure className="p-4">
        <Image src={images[0]} alt={name} width={400} height={400} className=""/>
      </figure>
      <div className="card-body">
        <h3 className="px-2 py-1 bg-theme-color-400/5 w-fit rounded">
          {category}
        </h3>
        <h2 className="card-title">{name}</h2>

        <div>
          {features.map((feature) => (
            <h4 key={feature} className="flex gap-1 text-theme-color-300 mt-2">
              <GiCheckMark className="text-lg text-theme-color-400" />
              {feature}
            </h4>
          ))}
        </div>
        <h3 className="text-xl font-bold mt-2 pb-16">${price}</h3>
        <div className="card-actions">
          <button className="btn bg-gradient-to-tr gradient-color rounded btn-active hover:brightness-90 text-white mt-4 absolute bottom-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
