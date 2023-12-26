import Image from "next/image";
import gopro from "/public/assets/GoPro-SG-LandingPage-Banner.png";

const Advertizement = () => {
  return (
    <div className="flex justify-center px-4 md:px-8">
      <Image src={gopro} width={1400} height={1000} alt="gopro camera" />
    </div>
  );
};

export default Advertizement;
