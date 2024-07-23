import {
  MainContext,
  MainContextType,
} from "@/screens/home/MainContextProvider";
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
      <div
        className={`flex flex-col items-center justify-center gap-y-3 p-5 border border-white rounded-lg hover:translate-y-[-8px] hover:bg-white/10 hover:backdrop-blur-md`}
        onClick={() => handleClick("todays-fortune")}
      >
        <h3 className={`text-3xl font-bold`}>{`Today's Fortune`}</h3>
        <p className={`text-center`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi
          similique tempora saepe illo quibusdam.
        </p>
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-y-3 p-5 border border-white rounded-lg hover:translate-y-[-8px] hover:bg-white/10 hover:backdrop-blur-md`}
        onClick={() => handleClick("do-or-dont")}
      >
        <h3 className={`text-3xl font-bold`}>{`Do or Don't`}</h3>
        <p className={`text-center`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi
          similique tempora saepe illo quibusdam.
        </p>
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-y-3 p-5 border border-white rounded-lg hover:translate-y-[-8px] hover:bg-white/10 hover:backdrop-blur-md`}
        onClick={() => handleClick("choices")}
      >
        <h3 className={`text-3xl font-bold`}>{`Choices`}</h3>
        <p className={`text-center`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem modi
          similique tempora saepe illo quibusdam.
        </p>
      </div>
    </section>
  );
};

export default Select;
