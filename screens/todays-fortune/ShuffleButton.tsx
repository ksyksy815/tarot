"use client";

type Props = {
  onClick: () => void;
};
const ShuffleButton = ({ onClick }: Props) => {
  const handleClick = () => {};

  return (
    <button type={`button`} onClick={onClick}>
      Shuffle
    </button>
  );
};

export default ShuffleButton;
