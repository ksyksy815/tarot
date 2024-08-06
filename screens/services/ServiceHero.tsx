"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceHero = () => {
  return (
    <section className={`w-full`}>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={"relative h-[640px] max-h-[816px] w-screen z-[-1]"}
        >
          <Image
            src={"/images/services.png"}
            fill={true}
            alt={"Services"}
            className={"h-full w-full object-cover"}
          />

          <p
            className={
              " h-[250px] w-[250px] grid place-content-center text-center text-white absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] text-5xl border border-white rounded-full bg-white/20 font-serif italic"
            }
          >
            AICana
          </p>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default ServiceHero;
