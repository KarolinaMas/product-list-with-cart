import clsx from "clsx";
import type { AddToCartControlsProps } from "../types/props";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import minusIcon from "../assets/icons/icon-decrement-quantity.svg";
import plusIcon from "../assets/icons/icon-increment-quantity.svg";

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
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 bg-white flex gap-2 py-3 px-6 text-sm font-semibold border border-rose-400 rounded-full leading-[150%] transition-all duration-300",
          !quantity
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        )}
      >
        <img src={cartIcon} alt="cart icon" /> Add to Cart
      </button>
      <div
        className={clsx(
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 py-3 px-3 bg-red text-white flex justify-between text-sm font-medium rounded-full leading-[150%] transition-all duration-300",
          !quantity
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        )}
      >
        <button
          className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer"
          onClick={() => removeFromCart(name)}
        >
          <img src={minusIcon} alt="" />
        </button>
        {quantity}
        <button
          className="w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 cursor-pointer"
          onClick={() => increment(name)}
        >
          <img src={plusIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default AddToCartControl;
