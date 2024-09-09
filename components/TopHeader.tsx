import Logo from "./Logo";
import MobileNav from "./nav/MobileNav";
import PCNav from "./nav/PCNav";

const TopHeader = () => {
  return (
    <header
      className={`flex items-center justify-center absolute w-full top-0 bg-transparent z-20 text-white`}
    >
      <div
        className={`h-[80px] w-full flex items-center justify-between max-w-screen-xl px-5`}
      >
        <Logo />

        <MobileNav />
        <PCNav />
      </div>
    </header>
  );
};

export default TopHeader;
