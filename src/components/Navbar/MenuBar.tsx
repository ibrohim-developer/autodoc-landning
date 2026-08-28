import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuBar = () => {
  const { t } = useTranslation();
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
    <div className="nav-bg dropdown max-sm:w-full mr-8 rounded-xl py-4 px-6 flex items-center sm:gap-16.5 gap-8 max-sm:justify-between">
      <img src={Images.menuburger} alt="" />
      <Link to={routerPaths.home}>
        <img src={Images.AutodocLight} alt="" />
      </Link>
      <img src={Images.phone} alt="" />
      <div className="dropdown-container max-sm:w-full">
        <div className="py-4 flex items-center max-sm:justify-between sm:gap-16.5 gap-4">
          <img src={Images.close} alt="" />
          <Link to={routerPaths.home}>
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
