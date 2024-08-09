import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TESTINONIALS } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section
      className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-[20px] py-[60px] xl:px-0`}
    >
      <h2 className={"text-3xl font-bold"}>What Out Clients Say</h2>
      <p>
        Hear from the people who have experienced the power of tarot readings
        with AICana.
      </p>

      <div className={"bg-slate-200 py-10"}>
        <InfiniteMovingCards
          items={TESTINONIALS}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
