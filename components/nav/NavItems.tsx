import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";

const NavItems = () => {
  return (
    <>
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={
            "w-full hover:bg-yellow-300 hover:text-black px-5 rounded-lg"
          }
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
