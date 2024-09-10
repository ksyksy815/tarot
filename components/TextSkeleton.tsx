import { Skeleton } from "@/components/ui/skeleton";
const TextSkeleton = () => {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <Skeleton className="w-[220px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[180px] h-[20px] rounded-full" />
    </div>
  );
};

export default TextSkeleton;
