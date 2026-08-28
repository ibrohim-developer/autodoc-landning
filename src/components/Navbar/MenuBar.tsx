import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const MenuBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={ref}
      onMouseLeave={() => setOpen(false)}
      className={`nav-bg dropdown menu-dropdown max-sm:w-full mr-[var(--nav-gap)] rounded-xl py-[var(--nav-pad-y)] px-[var(--nav-pad-x-menu)] flex items-center sm:gap-[var(--nav-gap-menu)] gap-[var(--nav-gap)] max-sm:justify-between ${
        open ? "is-open" : ""
      }`}
    >
      <img
        src={Images.menuburger}
        alt=""
        onClick={() => setOpen(true)}
        className="w-[var(--nav-icon)]"
      />
      <Link to={routerPaths.home}>
        <img
          src={Images.AutodocLight}
          alt=""
          className="h-[var(--nav-logo)] w-auto"
        />
      </Link>
      <img src={Images.phone} alt="" className="w-[var(--nav-icon-sm)]" />
      <div className="dropdown-container max-sm:w-full">
        <div className="py-4 flex items-center max-sm:justify-between sm:gap-16.5 gap-4">
          <img src={Images.close} alt="" onClick={() => setOpen(false)} />
          <Link to={routerPaths.home} onClick={() => setOpen(false)}>
            <img src={Images.AutodocLight} alt="" />
          </Link>
          <img src={Images.phone} alt="" />
        </div>
        <div className="flex flex-col gap-4.5 mt-6">
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
  );
};

export default MenuBar;
