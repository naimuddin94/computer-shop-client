import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";
import { IoWaterOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import gopro from "/public/assets/pdp-h11b-max-lens-mod-gallery-2.png";
import gopro2 from "/public/assets/clp-h11-mini-module-left-1920-2x.png";
import { Button } from "..";

const ActionCameraSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-16 py-8">
      <div className="flex-1">
        <Image src={gopro} alt="gopro" width={500} height={450} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <h1 className="absolute flex gap-1 text-theme-color-200 bg-gradient-to-r from-theme-color-100/25 to-theme-color-400/25 px-5 py-2 rounded-full items-center left-0 top-0 -rotate-45">
          <BiSolidOffer />
          20% OFF
        </h1>
        <h1 className="text-4xl flex items-center text-text/80 font-light">
          HERO <span className="text-8xl">9</span> BLACK
        </h1>
        <h1 className="text-5xl font-bold text-gradient py-2">
          More Everything
        </h1>
        <div className="flex gap-2 mt-2 text-theme-color-400">
          <h4 className="flex items-center gap-1">
            <BsCamera />
            20MP
          </h4>
          |
          <h4 className="flex items-center gap-1">
            <CgCamera />
            4K60/5K30
          </h4>
          |
          <h4 className="flex items-center gap-1">
            <IoWaterOutline />
            33fit(10m)
          </h4>
        </div>
        <h4>1080P Live Streaming</h4>
        <div className="mt-4">
          <Button text="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ActionCameraSection;
