export type ListItemProps = {
  image: string;
  name: string;
  category: string;
  price: number;
  handleClick: (name: string) => void;
};
