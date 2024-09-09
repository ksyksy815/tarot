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
    <div className={"h-[100svh] w-full relative"}>
      <Image
        src={"/images/todays-fortune.png"}
        fill={true}
        alt={"duck master"}
        className={"object-right-bottom object-cover aspect-auto"}
      />

      <div
        className={`w-full flex flex-col gap-y-5 text-white absolute top-[20vh] lg:top-[15vh]`}
      >
        <section className={"w-full"}>
          <PlayGround type={type} />
        </section>
      </div>

      <SparklesCore
        background="transparent"
        minSize={0.2}
        maxSize={1}
        particleDensity={20}
        className={`w-full h-[20%] max-h-[30vh]`}
        particleColor="#FFFFFF"
      />
    </div>
  );
};

export default IntroContainer;

//720
