import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
};
const SelectSpread = ({ title = "", description = "", url = "" }: Props) => {
  return (
    <div
      className={`h-[424px] flex-1 xl:w-[375px] flex flex-col justify-between gap-y-10 py-10 px-5 rounded-lg bg-aicana-dawn text-aicana-midnight`}
    >
      <div className={"flex flex-col gap-y-3"}>
        <h3 className={`text-3xl font-bold`}>{title}</h3>
        <p className={``}>{description}</p>
      </div>

      <Link href={url} className={"self-end"}>
        <Button>See more</Button>
      </Link>
    </div>
  );
};

export default SelectSpread;
