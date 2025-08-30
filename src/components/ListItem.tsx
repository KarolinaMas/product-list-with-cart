import type { ListItemProps } from "../types/props";
import clsx from "clsx";
import AddToCartControl from "./AddToCartControl";

const ListItem = ({
  image,
  name,
  category,
  price,
  quantity,
  addToCart,
  increment,
  decrement,
}: ListItemProps) => {

  return (
    <div>
      <img
        src={image}
        alt={name}
        className={clsx("rounded-lg", quantity && "border-2 border-red")}
      />
      <AddToCartControl
        name={name}
        handleClick={addToCart}
        removeFromCart={decrement}
        quantity={quantity}
        increment={increment}
      />
      <p className="text-sm text-rose-500 leading-[150%]">{category}</p>
      <p className="leading-[150%] font-semibold">{name}</p>
      <p className="leading-[150%] font-semibold text-red">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default ListItem;
