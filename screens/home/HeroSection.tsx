import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className={"relative w-full"}>
      <div className={`relative min-h-[816px] max-h-[80vh] w-full`}>
        <Image
          src={"/images/hero.png"}
          fill
          className={"object-cover"}
          alt={"Welcome to AIcana"}
        />
      </div>

      <div
        className={`absolute top-0 left-0 min-h-[816px] max-h-[80vh] w-full bg-gradient-to-b from-transparent to-black/70`}
      />

      <div
        className={`absolute flex flex-col gap-y-10 left-[10vw] bottom-[10vw] text-white`}
      >
        <div>
          <p className={"text-sm"}>Your gateway to personalized insights</p>
          <h1 className={"text-5xl font-bold"}>Welcome to AICana</h1>
        </div>

        <p className={"text-xl"}>
          Harness the power of advanced AI technology to gain deep, insightful,
          and meaningful tarot interpretations that resonate with your unique
          life experiences. Our AI-driven tarot readings provide clarity and
          guidance, helping you navigate life’s challenges and opportunities
          with confidence and wisdom.
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
