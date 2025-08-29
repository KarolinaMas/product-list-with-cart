import { useEffect, useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (name: string) => {
    if (quantity === 0) {
      setIsSelected((prev) => !prev);
      addToCart(name);
    }
  };

  const removeFromCart = (name: string) => {
    if (quantity > 1) {
      decrement(name);
    } else if (quantity <= 1) {
      setIsSelected((prev) => !prev);
      decrement(name);
    }
  };

  useEffect(() => {
    if (quantity === 0) {
      setIsSelected(false);
    }
  }, [quantity]);

  return (
    <div>
      <img
        src={image}
        alt={name}
        className={clsx("rounded-lg", isSelected && "border-2 border-red")}
      />
      <AddToCartControl
        name={name}
        isSelected={isSelected}
        handleClick={handleClick}
        removeFromCart={removeFromCart}
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
