import React from "react";

type Props = {
  title: string;
  contents: React.ReactNode;
};

const BasicSection = ({ title = "", contents = <></> }) => {
  return (
    <section
      className={`w-full flex flex-col items-start gap-y-5 md:gap-y-8 px-5`}
    >
      <h2
        className={
          "subtitle relative border-l-[4px] border-aicana-twilight pl-4"
        }
      >
        {title}
      </h2>
      {contents}
    </section>
  );
};

export default BasicSection;
