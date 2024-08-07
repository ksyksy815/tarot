import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useContext } from "react";
import { FaCommentDots } from "react-icons/fa";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const ContextForm = () => {
  const { updateContext, context } = useContext(PlayGroundContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const inputVale =
      (formElement.children[1].children[0] as HTMLTextAreaElement).value || "";
    const sanitizedValue = inputVale.replace(/[^\w\s.,]/gi, "");

    updateContext(sanitizedValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-y-6"}>
      <div className={"flex items-center gap-x-6"}>
        <FaCommentDots size={48} />
        <div className={"text-xl flex flex-col font-semibold"}>
          <p>{`What situation or choice do you need clarity and guidance on?`}</p>
          <p>{` Describe any relevant background information.`}</p>
        </div>
      </div>

      <div className={"flex items-center gap-x-2"}>
        <Textarea />
        <Button type="submit">{"Proceed"}</Button>
      </div>
    </form>
  );
};

export default ContextForm;
