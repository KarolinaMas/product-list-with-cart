import { useState } from "react";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import minusIcon from "../assets/icons/icon-decrement-quantity.svg";
import plusIcon from "../assets/icons/icon-increment-quantity.svg";
import type { ListItemProps } from "../types/props";
import clsx from "clsx";

const ListItem = ({
  image,
  name,
  category,
  price,
  quantity,
  handleClick,
}: ListItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const clickControl = () => {
    handleClick(name);
    if (quantity === 0) {
      setIsSelected((prev) => !prev);
    }
  };

  return (
    <div>
      <img
        src={image}
        alt="Dessert."
        className={clsx("rounded-lg", isSelected && "border-2 border-red")}
      />
      <div className="relative mb-10">
        <button
          onClick={() => clickControl()}
          className={clsx(
            "absolute bg-white flex gap-2 py-3 px-6 translate-x-[50%] translate-y-[-50%] text-sm font-semibold border border-rose-400 rounded-full leading-[150%] transition-all duration-300",
            !isSelected
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          )}
        >
          <img src={cartIcon} alt="cart icon" /> Add to Cart
        </button>
        <button
          onClick={() => clickControl()}
          className={clsx(
            "absolute bg-red text-white flex justify-between w-[150px] py-3 px-3 translate-x-[50%] translate-y-[-50%] text-sm font-medium rounded-full leading-[150%] transition-all duration-300",
            !isSelected
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100"
          )}
        >
          <div className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer">
            <img src={minusIcon} alt="" />
          </div>
          {quantity}
          <div className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer">
            <img src={plusIcon} alt="" />
          </div>
        </button>
      </div>
      <p className="text-sm text-rose-500 leading-[150%]">{category}</p>
      <p className="leading-[150%] font-semibold">{name}</p>
      <p className="leading-[150%] font-semibold text-red">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default ListItem;
