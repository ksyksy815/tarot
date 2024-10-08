import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useContext, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const DoOrDontForm = () => {
  const { updateContext } = useContext(PlayGroundContext);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateContext(userInput);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"flex flex-col gap-y-6 bg-black/30 p-5 backdrop-blur-sm"}
    >
      <div className={"flex flex-col md:flex-row md:items-center gap-4"}>
        <FaCommentDots size={48} />

        <div className={"flex flex-col gap-y-2"}>
          <p
            className={"text-xl font-semibold"}
          >{`What situation or choice do you need clarity and guidance on? Describe any relevant background information.`}</p>

          <p
            className={"text-white/90 italic text-sm"}
          >{`An example of a good question could be: ‘Should I proceed with this or not?`}</p>
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

      <Button type="submit" disabled={!userInput || userInput.length > 500}>
        {"Proceed"}
      </Button>
    </form>
  );
};

export default DoOrDontForm;
