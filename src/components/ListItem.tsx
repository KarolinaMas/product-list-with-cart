import { useState } from "react";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
// import imageDes from "../assets/images/image-waffle-mobile.jpg";
import type { ListItemProps } from "../types/props";

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
    setIsSelected((prev) => !prev);
  };

  return (
    <div>
      <img src={image} alt="Dessert." className="rounded-lg" />
      <button
        onClick={() => clickControl()}
        className="bg-white flex gap-2 py-3 px-6 translate-x-[50%] translate-y-[-50%] text-sm font-semibold border border-rose-400 rounded-full leading-[150%]"
      >
        <img src={cartIcon} alt="cart icon" /> Add to Cart {quantity}
        {isSelected && <span>selected</span>}
      </button>
      <p className="text-sm text-rose-500 leading-[150%]">{category}</p>
      <p className="leading-[150%] font-semibold">{name}</p>
      <p className="leading-[150%] font-semibold text-red">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default ListItem;
