import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className={"block md:hidden"}>
        <RiMenu3Line size={24} />
      </SheetTrigger>
      <SheetContent>
        <nav className={`flex flex-col items-start gap-5`}>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
