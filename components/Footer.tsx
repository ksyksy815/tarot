import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className={"flex flex-col w-full bg-gray-200 lg:h-[30vh] gap-y-10 p-10"}
    >
      <div className={`flex flex-col gap-10 lg:flex-row`}>
        <div className={"flex flex-col gap-y-4"}>
          <Logo />
          <p>
            {`AICana is dedicated to providing insightful and personalized tarot
          readings using advanced AI technology. Our mission is to offer clarity
          and guidance to help you navigate life's journey.`}
          </p>
        </div>

        <div className={"flex flex-col gap-2 lg:min-w-[30vw]"}>
          <h3 className={"font-bold"}>Quick Links</h3>
          <ul className={"flex flex-col"}>
            <Link href="/home">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
          </ul>
        </div>
      </div>

      <p className={"text-gray-800"}>
        &copy; 2024 AICana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
