import { RiServiceFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const FeatureHero = () => {
  return (
    <div className="flex-1 text-theme-color-400">
      <h3 className="text-theme-color-400 font-semibold uppercase">
        Key features
      </h3>
      <h2 className="text-xl md:text-4xl font-black text-gradient">
        We offer best price
      </h2>
      <p className="py-5 text-slate-600 text-sm font-light">
        Unlock incredible value with our second-hand laptops, where
        affordability meets quality. At our store, we redefine the notion of
        pre-owned devices by curating a selection of top-tier laptops that boast
        not only competitive prices but also exceptional quality.
      </p>
      <div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 rounded-lg">
          <div className=" bg-theme-color-100 rounded-xl p-3">
            <FaTools className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">1 year free services</h4>
            <p className="text-sm">Enjoy peace of mind with our services</p>
          </div>
        </div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 pr-8 shadow-sm rounded-lg">
          <div className=" bg-theme-yellow rounded-xl p-3">
            <IoShieldCheckmarkSharp className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quality Checked</h4>
            <p className="text-sm">Each laptop quality checks from us</p>
          </div>
        </div>
        <div className="flex gap-3 py-2 items-center w-fit px-6 rounded-lg">
          <div className=" bg-theme-color-200 rounded-xl p-3">
            <RiServiceFill className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">
              Professionally Refurbished
            </h4>
            <p className="text-sm">
              Our laptops are professionally refurbished
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
