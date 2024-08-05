import Logo from "./Logo";
import MobileNav from "./MobileNav";
import PCNav from "./PCNav";

const TopHeader = () => {
  return (
    <header
      className={`flex items-center justify-center sticky w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-20`}
    >
      <div
        className={`h-[80px] w-full flex items-center justify-between max-w-screen-xl px-5 xl:px-0`}
      >
        <Logo />

        <MobileNav />
        <PCNav />
      </div>
    </header>
  );
};

export default TopHeader;
