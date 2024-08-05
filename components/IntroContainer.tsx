"use client";

import { SPREAD_TYPES } from "@/screens/type-intro/constants";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  type: keyof typeof SPREAD_TYPES;
};

const IntroContainer = ({ type }: Props) => {
  return (
    <div className={`w-full flex flex-col gap-y-10`}>
      <section className={"relative h-[640px] max-h-[816px] w-full"}>
        <Image
          src={SPREAD_TYPES[type].imageUrl}
          fill={true}
          alt={"About"}
          className={"h-full w-full object-cover"}
        />

        <div
          className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50`}
        />

        <h1
          className={
            "absolute left-0 bottom-0 text-5xl font-serif text-white font-bold border-l-4 px-6 ml-[5vw] mb-[10vw]"
          }
        >
          {SPREAD_TYPES[type].title || "-"}
        </h1>
      </section>

      <section className={"w-full flex flex-col gap-10 px-[10vw] xl:px-0"}>
        <p>{SPREAD_TYPES[type].description || "-"}</p>
        <Button onClick={() => {}}>Shuffle</Button>
      </section>
    </div>
  );
};

export default IntroContainer;

//720
