import SelectSpread from "@/screens/select/SelectSpread";
import { SERVICES } from "./constants";

const Services = () => {
  return (
    <section className={`w-full flex flex-col xl:flex-row gap-10 px-10 pb-20`}>
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
