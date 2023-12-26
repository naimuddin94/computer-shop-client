import Image from "next/image";
import image1 from "/public/assets/laptop.png";

const FeaturePics = () => {
  return (
    <div className="flex-1">
      <div className="">
        <Image src={image1} alt="feature image" width={550} height={450} />
      </div>
    </div>
  );
};

export default FeaturePics;
