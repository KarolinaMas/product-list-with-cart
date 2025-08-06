import defaultForEmptyCart from "./assets/illustration-empty-cart.svg";

const App = () => {
  return (
    <div className="max-w-[327px] mx-auto flex flex-col gap-8">
      <section>
        <h1 className="text-[2.5rem] font-bold">Desserts</h1>
        <ul>
          <li>list item</li>
        </ul>
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
