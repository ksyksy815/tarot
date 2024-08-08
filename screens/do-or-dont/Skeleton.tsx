const Skeleton = () => {
  return (
    <div className="flex flex-col w-full gap-y-10 md:gap-y-10 overflow-hidden">
      {Array.from({ length: 3 }, (_, index) => index).map((count, index) => (
        <div
          key={`${count}-${index}`}
          className="relative flex w-full flex-col gap-y-2 px-5"
        >
          <div className="animate-skeleton-gradient h-[18px] w-[80%] bg-gradient-to-l from-gray-400 via-gray-300 rounded-lg" />
          <div className="animate-skeleton-gradient h-[18px] w-[20%] bg-gradient-to-l from-gray-200 via-gray-300 rounded-lg" />
          <div className="animate-skeleton-gradient h-[18px] w-[50%] bg-gradient-to-l from-gray-300 via-gray-300 rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
