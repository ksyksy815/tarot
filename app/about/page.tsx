import { ABOUT } from "@/constants/about";
import Image from "next/image";

const Page = () => {
  return (
    <div className={`w-full flex flex-col gap-y-20 pb-[150px]`}>
      <section className={"relative h-[640px] max-h-[816px] w-full"}>
        <Image
          src={"/images/tarot-reader.png"}
          fill={true}
          alt={"About"}
          className={"h-full w-full object-cover"}
        />
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h1 className={`text-5xl font-bold`}>{ABOUT.introduction.title}</h1>
        <p className={"text-xl"}>{ABOUT.introduction.description}</p>
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h2 className={"subtitle"}>{ABOUT.mission.title}</h2>
        <p className={"text-lg"}>{ABOUT.mission.description}</p>
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h2 className={"subtitle"}>{ABOUT.howAIcanaWorks.title}</h2>
        <p className={"text-lg"}>{ABOUT.howAIcanaWorks.description}</p>

        <div className={`w-full flex flex-col md:flex-row gap-10`}>
          <div
            className={
              "relative min-h-[500px] min-w-full md:min-w-[30vw] w-full"
            }
          >
            <Image
              src={"/images/cards.png"}
              fill
              alt={"How AIcana works"}
              className={"object-contain"}
            />
          </div>

          <ul className={"flex flex-col w-full gap-y-6"}>
            {ABOUT.howAIcanaWorks.list!.map((item, index) => {
              return (
                <li key={index}>
                  <h3 className={`font-bold text-xl`}>{item.subtitle}</h3>
                  <p className={"text-lg"}>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h2 className={"subtitle"}>{ABOUT.meetTheDeveloper.title}</h2>

        <div className={"w-full flex flex-col md:flex-row gap-10"}>
          <div
            className={"relative h-[300px] w-full rounded-lg overflow-hidden"}
          >
            <Image
              src={"/images/developer.png"}
              fill
              alt={"Developer"}
              className={"w-full object-cover"}
            />
          </div>
          <p className={"text-lg"}>{ABOUT.meetTheDeveloper.description}</p>
        </div>
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h2 className={"subtitle"}>{ABOUT.contactUs.title}</h2>
        <p className={"text-lg"}>{ABOUT.contactUs.description}</p>
      </section>
    </div>
  );
};

export default Page;
