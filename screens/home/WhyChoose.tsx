import { ABOUT } from "@/constants/about";

const WhyChoose = () => {
  return (
    <section
      className={`w-full flex flex-col gap-y-10 px-[20px] pb-[60px] xl:px-0`}
    >
      <h2 className={"text-aicana-dawn text-4xl font-bold"}>
        {ABOUT.whyChooseAIcana.title}
      </h2>
      <ul
        className={
          "flex flex-col items-start w-full gap-6 md:flex-row md:flex-wrap"
        }
      >
        {ABOUT.whyChooseAIcana.list!.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex flex-col items-center justify-center gap-y-6 p-6 rounded-lg ${
                index % 2 === 0
                  ? "bg-aicana-dawn text-aicana-midnight"
                  : "bg-aicana-twilight text-aicana-dawn"
              } md:min-h-[320px] md:flex-1 hover:translate-y-[-4px]`}
            >
              <div className={"w-full flex items-center gap-4"}>
                <div className="h-12 w-12 min-w-12 grid place-content-center rounded-full bg-aicana-midnight">
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
