import clsx from "clsx";
import confirmedIcon from "../assets/icons/icon-order-confirmed.svg";
import type { ModalProps } from "../types/props";

const Modal = ({
  cart,
  countTotalOrder,
  startNewOrder,
  isOrderConfirmed,
}: ModalProps) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-t-xl flex flex-col gap-8 py-10 px-6",
        "fixed bottom-0 left-0 right-0 z-50",
        "transform transition-transform duration-500 ease-out",
        isOrderConfirmed ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div>
        <img src={confirmedIcon} alt="confirmation icon." />
        <h2 className="text-[2.5rem] font-bold leading-[120%] mt-6 mb-2">
          Order Confirmed
        </h2>
        <p className="text-rose-500">We hope you enjoy your food!</p>
      </div>
      <div className="bg-rose-50 p-6 rounded-lg">
        {cart.map(({ name, image, quantity, total, price }) => (
          <div className="flex gap-4 py-4 border-b-2 border-rose-100">
            <img
              src={image.thumbnail}
              alt={name}
              className="w-12 h-12 rounded-sm"
            />
            <div className="text-rose-500 text-sm">
              <p className="text-rose-900 font-semibold w-34 truncate">
                {name}
              </p>
              <div className="flex gap-2.5 mt-2.5">
                <p className="text-red font-semibold">x{quantity}</p>
                <p>@ ${price.toFixed(2)}</p>
              </div>
            </div>
            <p className="font-semibold">${total.toFixed(2)}</p>
          </div>
        ))}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm">Order Total</p>
          <p className="text-2xl font-bold">${countTotalOrder().toFixed(2)}</p>
        </div>
      </div>
      <button
        className="
                    relative bg-red rounded-full w-full text-white font-medium px-6 py-4 cursor-pointer
                    transition-colors duration-300 ease-in-out
                    hover:bg-[#902b0b] focus:bg-[#902b0b] focus:outline-none
                    "
        onClick={startNewOrder}
      >
        Start New Order
      </button>
    </div>
  );
};

export default Modal;
