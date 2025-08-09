import { useEffect, useState } from "react";
import defaultForEmptyCart from "./assets/illustration-empty-cart.svg";
import ListItem from "./components/ListItem";
import data from "./data.json";
import type { Data } from "./types/data";

const App = () => {
  const [list, setList] = useState<Data[]>([]);

  useEffect(() => {
    setList(data);
  }, []);

  return (
    <div className="max-w-[327px] mx-auto py-6 flex flex-col gap-8">
      <section>
        <h1 className="text-[2.5rem] font-bold mb-8">Desserts</h1>
        <div className="flex flex-col gap-6">
          {list.map(({ image, name, category, price }) => (
            <ListItem
              key={name}
              image={image.mobile}
              name={name}
              category={category}
              price={price}
            />
          ))}
        </div>
      </section>
      <section className="bg-white p-6 rounded-xl">
        <p className="text-red text-2xl font-bold leading-[125%] mb-6">
          Your Cart (0)
        </p>
        <div className="py-4 flex flex-col items-center gap-4">
          <img
            className="w-32 h-32"
            src={defaultForEmptyCart}
            alt="decorative image for empty cart"
          />
          <p className="text-sm leading-[150%] text-rose-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
