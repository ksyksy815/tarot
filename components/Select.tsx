import Link from "next/link";

const Select = () => {
  return (
    <section className={`w-full flex flex-col md:flex-row gap-10`}>
      <Link href={"/todays-fortune"}>
        <div className={`flex flex-col p-5 border border-white rounded-lg`}>
          <h3>{`Today's Fortune`}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            modi similique tempora saepe illo quibusdam.
          </p>
        </div>
      </Link>

      <Link href={"/do-or-dont"}>
        <div className={`flex flex-col p-5 border border-white rounded-lg`}>
          <h3>{`Do or Don't`}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            modi similique tempora saepe illo quibusdam.
          </p>
        </div>
      </Link>

      <Link href={"/choices"}>
        <div className={`flex flex-col p-5 border border-white rounded-lg`}>
          <h3>{`Choices`}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            modi similique tempora saepe illo quibusdam.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Select;
