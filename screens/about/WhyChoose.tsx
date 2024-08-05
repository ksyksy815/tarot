import { ABOUT } from "@/constants/about";

const WhyChoose = () => {
  return (
    <section className={`w-full flex flex-col gap-y-10 px-[10vw] py-[60px]`}>
      <h2 className={"text-4xl font-bold"}>{ABOUT.whyChooseAIcana.title}</h2>
      <ul className={"flex flex-wrap items-start w-full gap-6"}>
        {ABOUT.whyChooseAIcana.list!.map((item, index) => {
          return (
            <li
              key={index}
              className={
                "flex flex-col items-center justify-center gap-y-5 border p-10 rounded-lg shadow-card-default"
              }
            >
              <div className={"w-full flex items-center gap-4"}>
                <div className="h-12 w-12 min-w-12 grid place-content-center rounded-full bg-black">
                  {item.icon ? item.icon() : <></>}
                </div>

                <h3 className={`text-xl font-semibold`}>{item.subtitle}</h3>
              </div>

              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyChoose;
