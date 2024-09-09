"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { URLS } from "@/constants/urls";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter();

  return (
    <AuroraBackground className={"relative h-[100svh] w-full"}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={"relative h-[640px] max-h-[816px] w-full z-[-1]"}
      >
        <div className={"h-[100svh] w-full relative"}>
          <Image
            src={"/images/duck-master.png"}
            fill={true}
            alt={"duck master"}
            className={"object-cover aspect-auto"}
          />
          <div
            className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/20`}
          />
        </div>
        <h1
          className={
            "absolute top-[20vh] left-[50%] translate-x-[-50%] flex flex-col items-center text-3xl text-white/80 font-bold whitespace-nowrap md:top-[15vh]"
          }
        >
          <span>Waddle this way</span>
          <span>and pick your spread</span>
        </h1>
      </motion.div>

      <div
        className={
          "absolute bottom-[35%] flex items-center justify-between w-full p-3 text-white md:text-xl md:bottom-[28%] md:p-8 lg:text-3xl lg:bottom-[20%] lg:p-12"
        }
      >
        <button
          className={
            "z-[50] w-[135px] h-[135px] md:w-[160px] md:h-[160px] bg-white/20 p-5 rounded-full border border-white hover:translate-y-[-12px] transition-transform ease-in-out"
          }
          onClick={() => router.push(URLS.services.todaysFortune)}
        >{`Today's Luck`}</button>
        <button
          className={
            "w-[135px] h-[135px] md:w-[160px] md:h-[160px] bg-white/20 p-5 rounded-full border border-white hover:translate-y-[-12px] transition-transform ease-in-out"
          }
          onClick={() => router.push(URLS.services.doOrDont)}
        >{`Do or Don't`}</button>
      </div>
    </AuroraBackground>
  );
};

export default MainPage;
