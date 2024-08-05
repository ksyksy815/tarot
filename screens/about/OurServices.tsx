import { Button } from "@/components/ui/button";
import { ABOUT } from "@/constants/about";

const OurServices = () => {
  return (
    <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-[10vw]`}>
      <h2 className={"text-4xl font-bold"}>
        {ABOUT.ourTarotReadingServices.title}
      </h2>

      <div className={`w-full flex flex-col gap-y-5`}>
        <p>{ABOUT.ourTarotReadingServices.description}</p>

        <ul className={`flex flex-col md:flex-row items-start gap-5`}>
          {ABOUT.ourTarotReadingServices.list!.map((item, index) => {
            return (
              <li
                key={index}
                className={`h-[250px] w-full flex flex-col justify-between flex-1 shadow-card-default rounded-lg p-5 hover:translate-y-[-5px] gap-y-5 hover:cursor-pointer`}
              >
                <div className={`flex flex-col gapy-y-3`}>
                  <h3 className={`font-semibold text-xl`}>{item.subtitle}</h3>
                  <p>{item.description}</p>
                </div>
                <Button className={`self-end`}>See more</Button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
