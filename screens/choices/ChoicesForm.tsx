import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useContext, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const ChoicesForm = () => {
  const { updateContext, updateOptions } = useContext(PlayGroundContext);
  const [userInput, setUserInput] = useState("");
  const [options, setOptions] = useState<(string | null)[]>([null, null, null]);
  const [openOption3, setOpenOption3] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateContext(userInput);
    updateOptions(options);
  };

  const handleDeleteThirdOption = () => {
    setOpenOption3(false);
    setOptions((prev) => {
      const newOptions = [...prev];
      newOptions[2] = null;
      return newOptions;
    });
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-y-20"}>
      <div className={"flex flex-col gap-y-6"}>
        <div className={"flex flex-col md:flex-row md:items-center gap-4"}>
          <FaCommentDots size={48} />

          <div className={"flex flex-col gap-y-2"}>
            <p
              className={"text-xl font-semibold"}
            >{`Please describe your situation in detail. What decision are you facing? Provide any background information that will help us understand your circumstances.`}</p>
          </div>
        </div>

        <div className={"flex flex-col gap-4"}>
          <Textarea
            onChange={(e) => {
              const sanitizedValue = e.target.value
                .replace(/[^\w\s?!.,:;'"\-=&%$()]/gi, "")
                .trim();
              setUserInput(sanitizedValue);
            }}
          />
          {userInput.length > 500 && (
            <p className={"text-red-500 text-sm"}>
              {"Please keep your input under 500 characters"}
            </p>
          )}
        </div>
      </div>

      <div className={"flex flex-col gap-y-6 w-full"}>
        <div className={"flex flex-col md:flex-row md:items-center gap-4"}>
          <FaCommentDots size={48} />

          <p
            className={"text-xl font-semibold"}
          >{`Enter the options you are considering. You can provide up to three options. These will be used to explore potential outcomes for each choice.`}</p>
        </div>
        {[1, 2].map((num, index) => (
          <div
            key={num}
            className={
              "flex flex-col items-start md:flex-row w-full md:items-center gap-3"
            }
          >
            <label className={"whitespace-nowrap font-semibold textl-lg"}>
              {`Option ${num}.`}
            </label>

            <div className={"flex flex-col flex-1 gap-y-2 w-full"}>
              <Input
                type="text"
                placeholder={`Optiopn ${num}`}
                onChange={(e) =>
                  setOptions((prev) => {
                    const newOptions = [...prev];
                    newOptions[index] = e.target.value.trim();
                    return newOptions;
                  })
                }
              />
              {options[index] && options[index].length > 100 && (
                <p className={"text-red-500 text-sm"}>
                  {"Please keep your description under 100 characters"}
                </p>
              )}
            </div>
          </div>
        ))}

        {openOption3 ? (
          <div
            className={
              "flex flex-col items-start md:flex-row w-full md:items-center gap-3"
            }
          >
            <label className={"whitespace-nowrap font-semibold textl-lg"}>
              {`Option ${3}.`}
            </label>

            <div className={"flex flex-col flex-1 gap-y-2 w-full"}>
              <Input
                type="text"
                placeholder={`Optiopn ${3}`}
                onChange={(e) =>
                  setOptions((prev) => {
                    const newOptions = [...prev];
                    newOptions[2] = e.target.value.trim();
                    return newOptions;
                  })
                }
              />
              {options[2] && options[2].length > 100 && (
                <p className={"text-red-500 text-sm"}>
                  {"Please keep your description under 100 characters"}
                </p>
              )}
            </div>

            <Button
              className={"h-10 w-10"}
              onClick={() => handleDeleteThirdOption()}
            >
              <FaMinus size={28} />
            </Button>
          </div>
        ) : (
          <Button variant={"outline"} onClick={() => setOpenOption3(true)}>
            <FaPlus size={24} />
          </Button>
        )}
      </div>

      <Button
        type="submit"
        disabled={
          !userInput ||
          userInput.length > 500 ||
          !options[0] ||
          options[0].length >= 100 ||
          !options[1] ||
          options[1].length >= 100
        }
      >
        {"Proceed"}
      </Button>
    </form>
  );
};

export default ChoicesForm;
