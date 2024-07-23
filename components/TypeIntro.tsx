import { MainContext } from "@/screens/home/MainContextProvider";
import Ground from "@/screens/todays-fortune/Ground";
import { useContext } from "react";

const TypeIntro = () => {
  const { type } = useContext(MainContext);

  // if (type === 'todays-fortune') {
  //     return <div></div>
  // }

  // if (type === 'do-or-dont') {
  //     return <div></div>
  // }

  if (!type) return <></>;

  return <Ground type={type} />;
};

export default TypeIntro;
