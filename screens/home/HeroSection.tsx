import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section
      className={"relative w-full md:max-h-[80vh]"}
      style={{ height: `calc(100svh - 80px)` }}
    >
      <div className={`relative h-full w-full`}>
        <Image
          src={"/images/hero.png"}
          fill
          className={"object-cover"}
          alt={"Welcome to AIcana"}
        />
      </div>

      <div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/70`}
      />

      <div
        className={`absolute flex flex-col gap-y-6 bottom-0 left-0 text-white px-[8vw] pb-[10vw] md:px-[5vw] md:pb-[5vw]`}
      >
        <h1 className={"flex flex-col text-4xl md:text-5xl font-bold"}>
          <FlipWords
            words={[
              "Insightful",
              "Personalized",
              "Accurate",
              "Empowering",
              "Transforming",
            ]}
            className={"text-white"}
          />
          <span className={"ml-5"}>{`tarot with AICana`}</span>
        </h1>

        <p className={"mb-8 md:text-xl md:max-w-[40vw]"}>
          Harness the power of advanced AI technology to gain deep, insightful,
          and meaningful tarot interpretations that resonate with your unique
          life experiences.
        </p>

        <Link href={"/services"}>
          <Button variant={"secondary"} className={"self-start"}>
            Get Your Reading Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
