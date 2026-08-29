import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useDropdown from "./useDropdown";

const MenuBar = () => {
  const { t } = useTranslation();
  const { open, setOpen, ref, toggle } = useDropdown<HTMLDivElement>();
  const list = [
    {
      name: t("home"),
      to: routerPaths.home,
    },
    {
      name: t("mediaHub"),
      to: routerPaths.media,
    },
    {
      name: t("historyHolding"),
      to: routerPaths.history,
    },
    {
      name: t("management"),
      to: routerPaths.home + "#leaders",
    },
    {
      name: t("projects"),
      to: routerPaths.projects,
    },
    {
      name: `${t("career")}/${t("vacancies")}`,
      to: routerPaths.career,
    },
    {
      name: t("partners"),
      to: routerPaths.partners,
    },
    {
      name: t("contacts"),
      to: routerPaths.contacts,
    },
  ];

  return (
    <div
      ref={ref}
      className={`nav-bg dropdown menu-dropdown max-sm:w-full rounded-xl py-[var(--nav-pad-y)] px-[var(--nav-pad-x-menu)] flex items-center sm:gap-[var(--nav-gap-menu)] gap-[var(--nav-gap)] max-sm:justify-between ${
        open ? "is-open" : ""
      }`}
    >
      {/* The trigger doubles as the close control: the panel no longer carries
          its own copy of the bar, so this is the only burger/X on screen. */}
      <img
        src={open ? Images.close : Images.menuburger}
        alt=""
        aria-expanded={open}
        onClick={toggle}
        className="w-[var(--nav-icon)] cursor-pointer"
      />
      <Link to={routerPaths.home}>
        <img
          src={Images.AutodocLight}
          alt=""
          className="h-[var(--nav-logo)] w-auto"
        />
      </Link>
      <img src={Images.phone} alt="" className="w-[var(--nav-icon-sm)]" />
      <div className="dropdown-container max-sm:w-full" inert={!open}>
        <div className="menu-panel">
          <div className="flex flex-col gap-4.5">
            {list.map((item, idx) => (
              <Link
                className="flex justify-center text-center sm:text-[32px] leading-[90%] tracking-[-0.96px]"
                key={idx.toString()}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
