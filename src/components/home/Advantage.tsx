import { TbTruckDelivery } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import {
  MdLocalOffer,
  MdHomeRepairService,
  MdDesignServices,
} from "react-icons/md";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-br from-theme-yellow to-theme-color-100 p-4 ">
      <AdvantageCard text="Fast Delivery" Icon={TbTruckDelivery} />
      <AdvantageCard text="100% Authentic Products" Icon={FaCircleCheck} />
      <AdvantageCard text="Best Price Guaranteed" Icon={MdLocalOffer} />
      <AdvantageCard text="Quick Service" Icon={MdHomeRepairService} />
      <AdvantageCard text="Quality Installation" Icon={MdDesignServices} />
    </div>
  );
};

export default Advantage;
