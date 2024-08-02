import { ABOUT } from "@/constants/about";
import OurServices from "@/screens/about/OurServices";

const Page = () => {
  return (
    <div className={`w-full flex flex-col gap-y-20 pt-10 pb-[150px]`}>
      <section className={`w-full flex flex-col rounded-lg overflow-hidden`}>
        <h1 className={`text-5xl font-bold`}>{ABOUT.introduction.title}</h1>
        <p className={"text-xl"}>{ABOUT.introduction.description}</p>
      </section>

      <section className={`w-full flex flex-col`}>
        <h2 className={"subtitle"}>{ABOUT.mission.title}</h2>
        <p>{ABOUT.mission.description}</p>
      </section>

      <section className={`w-full flex flex-col`}>
        <h2 className={"subtitle"}>{ABOUT.howAIcanaWorks.title}</h2>
        <p>{ABOUT.howAIcanaWorks.description}</p>

        <ul>
          {ABOUT.howAIcanaWorks.list!.map((item, index) => {
            return (
              <li key={index}>
                <h3 className={`font-semibold`}>{item.subtitle}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={`w-full flex flex-col`}>
        <h2 className={"subtitle"}>{ABOUT.whyChooseAIcana.title}</h2>
        <ul>
          {ABOUT.whyChooseAIcana.list!.map((item, index) => {
            return (
              <li key={index}>
                <h3 className={`font-semibold`}>{item.subtitle}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <OurServices />

      <section className={`w-full flex flex-col`}>
        <h2 className={"subtitle"}>{ABOUT.meetTheDeveloper.title}</h2>
        <p>{ABOUT.meetTheDeveloper.description}</p>
      </section>

      <section>
        <h2 className={"subtitle"}>{ABOUT.contactUs.title}</h2>
        <p>{ABOUT.contactUs.description}</p>
      </section>
    </div>
  );
};

export default Page;
