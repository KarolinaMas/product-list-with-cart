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
  const { mobile, tablet, desktop } = image;

  return (
    <div className="sm:max-w-53.5 ">
      <div className="relative mb-10">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(min-width: 640px)" srcSet={tablet} />
          <source media="(min-width: 0px)" srcSet={mobile} />
          <img
            src={mobile}
            alt={name}
            className={clsx("rounded-lg", quantity && "outline-2 outline-red")}
          />
        </picture>
        <AddToCartControl
          name={name}
          handleClick={addToCart}
          removeFromCart={decrement}
          quantity={quantity}
          increment={increment}
        />
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
