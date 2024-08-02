import {
  MainContext,
  MainContextType,
} from "@/screens/home/MainContextProvider";
import SelectSpread from "@/screens/select/SelectSpread";
import { useContext } from "react";

const Select = () => {
  const { changeToTypeIntro } = useContext(MainContext);

  const handleClick = (type: MainContextType["type"]) => {
    changeToTypeIntro(type);
  };
  return (
    <section
      className={`h-full w-full flex flex-col md:flex-row gap-10 cursor-pointer`}
    >
      <SelectSpread
        spreadType={"todaysFortune"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi similique tempora saepe illo quibusdam."
        }
      />

      <SelectSpread
        spreadType={"doOrDont"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi similique tempora saepe illo quibusdam."
        }
      />

      <SelectSpread
        spreadType={"choices"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi similique tempora saepe illo quibusdam."
        }
      />
    </section>
  );
};

export default Select;
