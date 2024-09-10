import React from "react";

type Props = {
  children: React.ReactNode;
};
const BasicPage = ({ children }: Props) => {
  return (
    <div className={"min-h-[100svh] w-full flex flex-col gap-y-[100px]"}>
      {children}
    </div>
  );
};

export default BasicPage;
