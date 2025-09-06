import clsx from "clsx";
import type { AddToCartControlsProps } from "../types/props";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const AddToCartControl = ({
  name,
  handleClick,
  removeFromCart,
  quantity,
  increment,
}: AddToCartControlsProps) => {
  return (
    <>
      <button
        onClick={() => handleClick(name)}
        className={clsx(
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 bg-white flex gap-2 py-3 px-6 text-sm font-semibold border border-rose-400 rounded-full leading-[150%] cursor-pointer",
          "transition-all duration-300",
          "hover:border-red hover:text-red focus:border-red focus:text-red",
          !quantity
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        )}
      >
        <img src={cartIcon} alt="cart icon" /> Add to Cart
      </button>
      <div
        className={clsx(
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 py-3 px-3 bg-red text-white flex justify-between text-sm font-medium rounded-full",
          "transition-all duration-300",
          !quantity
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        )}
      >
        <button
          className="
                w-4.5 h-4.5 flex items-center justify-center rounded-full border-1 cursor-pointer
                transition duration-200 ease-in
                hover:bg-white hover:text-red focus:bg-white focus:text-red
                "
          onClick={() => removeFromCart(name)}
        >
          <FiMinus size={14} />
        </button>
        {quantity}
        <button
          className="
                w-4.5 h-4.5 flex items-center justify-center rounded-full border-1 cursor-pointer
                transition duration-200 ease-in
                hover:bg-white hover:text-red focus:bg-white focus:text-red
                "
          onClick={() => increment(name)}
        >
          <GoPlus size={16} />
        </button>
      </div>
    </>
  );
};

export default AddToCartControl;
