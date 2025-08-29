import clsx from "clsx";
import type { AddToCartControlsProps } from "../types/props";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import minusIcon from "../assets/icons/icon-decrement-quantity.svg";
import plusIcon from "../assets/icons/icon-increment-quantity.svg";

const AddToCartControl = ({
  isSelected,
  name,
  handleClick,
  removeFromCart,
  quantity,
  increment,
}: AddToCartControlsProps) => {
  return (
    <div className="relative mb-10">
      <button
        onClick={() => handleClick(name)}
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
        className={clsx(
          "absolute bg-red text-white flex justify-between w-[150px] py-3 px-3 translate-x-[50%] translate-y-[-50%] text-sm font-medium rounded-full leading-[150%] transition-all duration-300",
          !isSelected
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        )}
      >
        <div
          className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer"
          onClick={() => removeFromCart(name)}
        >
          <img src={minusIcon} alt="" />
        </div>
        {quantity}
        <div
          className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer"
          onClick={() => increment(name)}
        >
          <img src={plusIcon} alt="" />
        </div>
      </button>
    </div>
  );
};

export default AddToCartControl;
