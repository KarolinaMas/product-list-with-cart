export type ListItemProps = {
  image: string;
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
  isSelected: boolean;
  handleClick: (name: string) => void;
  removeFromCart: (name: string) => void;
  increment: (name: string) => void;
  quantity: number;
};
