import type { CartItem } from "./types/data";

export const incrementLogic = (cart: CartItem[], name: string) => {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const copy = [...cart];
    const existing = copy[index];
    const nextQuantity = existing.quantity + 1;

    copy[index] = {
      ...existing,
      quantity: nextQuantity,
      total: existing.price * nextQuantity,
    };

    return copy;
  }

  return cart;
};

export const decrementLogic = (cart: CartItem[], name: string) => {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const copy = [...cart];
    const existing = copy[index];
    const nextQuantity = existing.quantity - 1;

    copy[index] = {
      ...existing,
      quantity: nextQuantity,
      total: existing.price * nextQuantity,
    };

    return copy;
  }

  return cart;
};
