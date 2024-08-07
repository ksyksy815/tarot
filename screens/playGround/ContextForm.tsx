import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useContext } from "react";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const ContextForm = () => {
  const { updateContext } = useContext(PlayGroundContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const inputVale = (formElement.children[0] as HTMLInputElement).value || "";
    const sanitizedValue = inputVale.replace(/[^\w\s.,]/gi, "");

    updateContext(sanitizedValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={"flex items-center gap-x-2"}>
      <Input type="text" />
      <Button type="submit">{"Enter"}</Button>
    </form>
  );
};

export default ContextForm;
