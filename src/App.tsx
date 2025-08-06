import defaultForEmptyCart from "./assets/illustration-empty-cart.svg";

const App = () => {
  return (
    <div className="max-w-[327px] mx-auto">
      <section>
        <h1 className="text-[2.5rem] font-bold">Desserts</h1>
        <ul>
          <li>list item</li>
        </ul>
      </section>
      <section className="bg-white">
        <p>Your Cart (0)</p>
        <img src={defaultForEmptyCart} alt="decorative image for empty cart" />
        <p>Your added items will appear here</p>
      </section>
    </div>
  );
};

export default App;
