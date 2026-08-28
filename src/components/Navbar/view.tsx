import LanguageSwitcher from "./LanguageSwitcher";
import MenuBar from "./MenuBar";
import Time from "./Time";

export const Navbar = () => {
  return (
    <nav className="fixed sm:top-5 top-4 max-sm:right-4 max-sm:left-4 sm:left-[50%] sm:translate-x-[-50%] sm:w-max w-full flex sm:gap-5.25 z-100">
      <Time className="max-lg:hidden" />
      <MenuBar />
      <LanguageSwitcher className="max-sm:hidden" />
    </nav>
  );
};

export default Navbar;
