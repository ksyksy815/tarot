import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section
      className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-[10vw] py-[60px]`}
    >
      <h2 className={"text-3xl font-bold"}>What Out Clients Say</h2>
      <p>
        Hear from real people who have experienced the power of tarot readings.
      </p>

      <div className={"flex items-start flex-wrap w-full gap-6 "}>
        <div
          className={
            "flex flex-col p-10 shadow-card-default rounded-lg gap-y-5"
          }
        >
          <div className={`flex items-center w-full gap-x-5`}>
            <FaUser size={24} />
            <div className={"flex flex-col items-start"}>
              <h3>John Doe</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>
          <p>
            The tarot reading I received was incredibly insightful and helped me
            gain clarity on a major life decision. I highly recommend this
            service!
          </p>
        </div>

        <div
          className={"flex flex-col p-5 shadow-card-default rounded-lg gap-y-5"}
        >
          <div className={`flex items-center w-full gap-x-5`}>
            <FaUser size={24} />
            <div className={"flex flex-col items-start"}>
              <h3>John Doe</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>
          <p>
            The tarot reading I received was incredibly insightful and helped me
            gain clarity on a major life decision. I highly recommend this
            service!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
