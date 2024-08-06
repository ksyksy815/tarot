import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className={"block md:hidden"}>
        <RiMenu3Line size={24} />
      </SheetTrigger>
      <SheetContent>
        <nav className={`mt-10 flex flex-col items-start gap-5`}>
          <NavItems />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
