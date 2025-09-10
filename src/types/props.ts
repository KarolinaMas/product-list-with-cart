import type { CartItem } from "./data";

export type ListItemProps = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity: number;
  addToCart: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
};

export type AddToCartControlsProps = {
  name: string;
  handleClick: (name: string) => void;
  removeFromCart: (name: string) => void;
  increment: (name: string) => void;
  quantity: number;
};

export type ModalProps = {
  cart: CartItem[];
  countTotalOrder: () => number;
  startNewOrder: () => void;
  isOrderConfirmed: boolean;
};
