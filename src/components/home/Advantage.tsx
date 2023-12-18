import { TbTruckDelivery } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import {
  MdLocalOffer,
  MdHomeRepairService,
  MdMiscellaneousServices,
  MdDesignServices,
} from "react-icons/md";



const Advantage = () => {
  return (
    <div className="flex items-center justify-between text-lg font-semibold">
      <div>
        <TbTruckDelivery />
        <h3>Fast Delivery</h3>
      </div>
      <div>
        <FaCircleCheck />
        <h3>100% Authentic Products</h3>
      </div>
      <div>
        <MdLocalOffer />
        <h3>Best Price Guaranteed</h3>
      </div>
      <div>
        <MdMiscellaneousServices />
        <h3>1 Years Service Free</h3>
      </div>
      <div>
        <MdHomeRepairService />
        <h3>Quick Service</h3>
      </div>
      <MdDesignServices />
      <div>Quality Installation</div>
    </div>
  );
};

export default Advantage;
