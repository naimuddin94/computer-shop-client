import Image from "next/image";
import titleImage from "/public/assets/Graphic_Elements.png";

const Headline = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center pt-10">
      <div className="relative bg-white rounded shadow-sm shadow-theme-secondary">
        <figure className="absolute left-0">
          <Image src={titleImage} alt="title texture" width={40} height={40} />
        </figure>
        <h1 className="text-5xl font-thin text-theme-color-300 px-6 py-2">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Headline;
