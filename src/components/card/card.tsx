import clsx from "clsx";
import { Product } from "../../types";
import { FiHeart } from "react-icons/fi";

export default function Card({ clothingInfo }: { clothingInfo: Product }) {
  return (
    <div className={clsx(
      "flex flex-col gap-2 w-[31%] min-w-56 rounded-xl py-3 px-1",
      "border-[1px] border-white hover:border-black hover:bg-gray-100"
    )}>
      <div className="relative w-full h-full bg-gray-200 rounded-xl wrap-hidden">
        <img
          src={`data:image/png;base64,${clothingInfo.image}`}
          alt="" 
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <span className="text-sm">
        {clothingInfo.nameOfProduct}
      </span>
      <div className="flex flex-row h-4 gap-1">
        <FiHeart size={20} />{clothingInfo.like ?? 0}
      </div>
    </div>
  );
}
