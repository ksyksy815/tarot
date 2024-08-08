"use client";

import { SPREAD_TYPES } from "@/constants/servicesIntro";
import PlayGround from "@/screens/playGround/PlayGround";
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";

type Props = {
  type: keyof typeof SPREAD_TYPES;
};

const IntroContainer = ({ type }: Props) => {
  return (
    <div className={`w-full flex flex-col gap-y-20`}>
      <section
        className={"relative h-[640px] w-full"}
        style={{ maxHeight: `calc(100vh - 80px)` }}
      >
        <Image
          src={SPREAD_TYPES[type].imageUrl}
          fill={true}
          alt={"About"}
          className={"w-full object-cover"}
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
        <SparklesCore
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={20}
          className={`w-full h-full`}
          particleColor="#FFFFFF"
        />
      </section>

      <PlayGround type={type} />
    </div>
  );
};

export default IntroContainer;

//720
