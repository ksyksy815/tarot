import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";

const NavItems = () => {
  return (
    <>
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={"w-full hover:bg-violet-300 hover:text-white px-5"}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
