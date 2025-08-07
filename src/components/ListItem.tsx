import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import imageDes from "../assets/images/image-waffle-mobile.jpg";

const ListItem = () => {
  return (
    <div>
      <img src={imageDes} alt="Dessert." className="rounded-lg" />
      <button className="bg-white flex gap-2 py-3 px-6 translate-x-[50%] translate-y-[-50%] text-sm font-semibold border border-rose-400 rounded-full leading-[150%]">
        <img src={cartIcon} alt="cart icon" /> Add to Cart
      </button>
      <p className="text-sm text-rose-500 leading-[150%]">Waffle</p>
      <p className="leading-[150%] font-semibold">Waffle with Berries</p>
      <p className="leading-[150%] font-semibold text-red">$6.50</p>
    </div>
  );
};

export default ListItem;
