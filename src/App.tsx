import { useEffect, useMemo, useState } from "react";
import defaultForEmptyCart from "./assets/illustration-empty-cart.svg";
import ListItem from "./components/ListItem";
import data from "./data.json";
import type { Data, CartItem } from "./types/data";

const App = () => {
  const [list, setList] = useState<Data[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setList(data);
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (name: string) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.name === name);

      if (index !== -1) {
        const copy = [...prev];
        const existing = copy[index];
        copy[index] = { ...existing, quantity: existing.quantity + 1 };
        return copy;
      }

      const item = list.find((item) => item.name === name);
      if (!item) return prev;
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleClick = (name: string) => {
    addToCart(name);
  };

  const totalUnits = useMemo(
    () => cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    [cart]
  );

  const removeItem = (name: string) => {
    const editedList = cart.filter((item) => item.name !== name);
    setCart(editedList);
  };

  return (
    <div className="mx-auto flex max-w-[327px] flex-col gap-8 py-6">
      <section>
        <h1 className="mb-8 text-[2.5rem] font-bold">Desserts</h1>
        <div className="flex flex-col gap-6">
          {list.map(({ image, name, category, price }) => (
            <ListItem
              key={name}
              image={image.mobile}
              name={name}
              category={category}
              price={price}
              handleClick={handleClick}
            />
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-white p-6">
        <p className="text-2xl font-bold leading-[125%] text-red mb-6">
          Your Cart ({totalUnits})
        </p>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <img
              className="h-32 w-32"
              src={defaultForEmptyCart}
              alt="decorative image for empty cart"
            />
            <p className="text-sm font-semibold leading-[150%] text-rose-500">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between pb-4 mb-4 text-sm border-b-2 border-rose-100"
              >
                <div className="text-rose-500">
                  <p className="text-rose-900 font-semibold ">{item.name}</p>
                  <div className="flex gap-2.5 mt-2.5">
                    <p className="text-red font-semibold">x{item.quantity}</p>
                    <p>@ ${item.price.toFixed(2)}</p>
                    <p className="font-semibold">$13.00</p>
                  </div>
                </div>
                <button
                  className="
                        group w-[17.5px] h-[17.5px] flex items-center justify-center rounded-full border-2 border-rose-400 cursor-pointer 
                        hover:border-rose-900
                        "
                  onClick={() => removeItem(item.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-[17.5px] h-[17.5px] text-rose-400 group-hover:text-rose-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
