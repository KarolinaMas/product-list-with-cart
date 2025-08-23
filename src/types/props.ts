export type ListItemProps = {
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  handleClick: (name: string) => void;
};
