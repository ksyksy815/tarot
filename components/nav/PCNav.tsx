import NavItems from "./NavItems";

const PCNav = () => {
  return (
    <nav className={`hidden md:flex items-center gap-5`}>
      <NavItems />
    </nav>
  );
};

export default PCNav;
