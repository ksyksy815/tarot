import { useContext } from "react";
import { MainContext, MainContextType } from "../home/MainContextProvider";

type Props = {
  spreadType: MainContextType["type"];
  description: string;
};
const SelectSpread = ({ spreadType, description = "" }: Props) => {
  const { changeToTypeIntro } = useContext(MainContext);

  const handleClick = (type: Props["spreadType"]) => {
    changeToTypeIntro(type);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-y-3 p-5 border border-white rounded-lg hover:translate-y-[-8px] hover:bg-white/10 hover:backdrop-blur-md`}
      onClick={() => handleClick(spreadType)}
    >
      <h3 className={`text-3xl font-bold`}>{`Today's Fortune`}</h3>
      <p className={`text-center`}>{description}</p>
    </div>
  );
};

export default SelectSpread;
