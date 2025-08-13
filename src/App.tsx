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
                className="grid grid-cols-12 items-center gap-2 p-3"
              >
                <div className="col-span-7">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-lg font-semibold">x{item.quantity}</p>
                </div>
                <div className="col-span-3 text-right">
                  <p className="font-medium">@ ${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
