import SelectSpread from "./SelectSpread";
import { SERVICES } from "./constants";

const Services = () => {
  return (
    <section
      className={`w-full flex flex-col xl:flex-row gap-10 px-[40px] pb-20`}
    >
      {SERVICES.map((service) => (
        <SelectSpread
          key={service.spreadType}
          title={service.title}
          description={service.description}
          url={service.slug}
        />
      ))}
    </section>
  );
};

export default Services;
