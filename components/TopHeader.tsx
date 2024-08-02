import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fortunes", href: "/fortunes" },
];

const TopHeader = () => {
  return (
    <header
      className={`flex items-center justify-center sticky w-full top-0  bg-white/90 backdrop-blur-sm shadow-sm z-20`}
    >
      <div
        className={`h-[80px] w-full flex items-center justify-between max-w-screen-xl`}
      >
        <Image
          src={"/icons/logo.svg"}
          alt={"AICana logo"}
          width={162}
          height={48}
        />
        <nav className={`flex items-center gap-x-10`}>
          {NAV_ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopHeader;
