"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};
const ShuffleButton = ({ onClick }: Props) => {
  const handleClick = () => {};

  return <Button onClick={onClick}>Shuffle</Button>;
};

export default ShuffleButton;
