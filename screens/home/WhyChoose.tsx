import { ABOUT } from "@/constants/about";

const WhyChoose = () => {
  return (
    <section
      className={`w-full flex flex-col gap-y-10 px-[40px] pb-[60px] xl:px-0`}
    >
      <h2 className={"text-4xl font-bold"}>{ABOUT.whyChooseAIcana.title}</h2>
      <ul
        className={
          "flex flex-col items-start w-full gap-6 md:flex-row md:flex-wrap"
        }
      >
        {ABOUT.whyChooseAIcana.list!.map((item, index) => {
          return (
            <li
              key={index}
              className={
                "flex flex-col items-center justify-center gap-y-6 border p-6 rounded-lg shadow-card-default md:min-h-[320px] md:flex-1"
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
