import Image from "next/image";
import cpu from "/public/assets/hyperpc-perfrormance-page-banner.png"

const Banner = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-[calc(100vh-64px)] flex items-center text-white">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vitae
        saepe veritatis consectetur, quia labore blanditiis dignissimos
        deserunt, debitis alias placeat, recusandae eaque eveniet nam totam
        voluptas sint nesciunt quae.
      </div>
      <div>
        <Image src={cpu} alt="banner image" width={400} height={400} />
      </div>
    </div>
  );
};

export default Banner;
