import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";

const PCNav = () => {
  return (
    <nav className={`hidden md:flex items-center gap-5`}>
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={"hover:bg-violet-900 hover:text-white px-5 rounded-lg"}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default PCNav;
