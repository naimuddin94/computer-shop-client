import { AdvantageCardProps } from "@/types/types";

const AdvantageCard = ({ text, Icon }: AdvantageCardProps) => {
  return (
    <div className="flex gap-1 items-center font-semibold text-theme-color-400 bg-white/10 px-4 py-2 rounded ring-1 ring-theme-yellow/50 shadow">
      <Icon className="text-3xl" />
      <h3>{text}</h3>
    </div>
  );
};

export default AdvantageCard;
