import { useContext, useEffect, useState } from "react";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const GUIDE_MESSAGES = [
  `Step 1. Select the first card. This card represents what will happen if you choose option 1.`,
  `Step 2. Select the second card. This card represents what will happen if you choose option 2.`,
  `Step 3. Select the third card. This card represents what will happen if you choose option 2.`,
  `Select the final card. This card will provide advice to help you make your choice.`,
];

const ChoicesSelectionHelper = () => {
  const { selectedCards, options } = useContext(PlayGroundContext);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 0) {
      setStep(0);
    } else if (selectedCards.length === 1) {
      setStep(1);
    } else if (selectedCards.length === 2) {
      setStep(2);
    } else {
      setStep(3);
    }
  }, [selectedCards]);

  return (
    <div className={"w-full flex flex-col items-start flex-1"}>
      <div className={`flex items-center gap-x-2`}>
        <span
          className={`${
            step > 0 ? "line-through italic opacity-80 text-xs" : ""
          }`}
        >
          {GUIDE_MESSAGES[0]}
        </span>
      </div>
      {step >= 1 && (
        <div className={`flex items-center gap-x-2`}>
          <span
            className={`${
              step > 1 ? "line-through italic opacity-80 text-xs" : ""
            }`}
          >
            {GUIDE_MESSAGES[1]}
          </span>
        </div>
      )}

      {step >= 2 && options[2] && (
        <div className={`flex items-center gap-x-2`}>
          <span
            className={`${
              step > 2 ? "line-through italic opacity-80 text-xs" : ""
            }`}
          >
            {GUIDE_MESSAGES[2]}
          </span>
        </div>
      )}

      {(step >= 3 || (step >= 2 && !options[2])) && (
        <div className={`flex items-center gap-x-2`}>
          <span
            className={`${
              step > 3 || (step >= 3 && !options[2])
                ? "line-through italic opacity-80 text-xs"
                : ""
            }`}
          >
            {GUIDE_MESSAGES[3]}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChoicesSelectionHelper;
