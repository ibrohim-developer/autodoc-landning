import Images from "@/assets/images";
import Copyright from "./Copyright";
import { routerPaths } from "@/app/routerPaths";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = [
    {
      name: t("aboutHolding"),
      to: routerPaths.history,
    },
    {
      name: t("history"),
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
      name: t("career"),
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
  const socialList = [
    {
      to: "https://www.instagram.com/autodoc_holding/?utm_source=ig_embed&ig_rid=ABWV4N70kILtqJkIHzXtVuX",
      icon: Images.instagram,
    },
    // {
    //   to: "#",
    //   icon: Images.indenim,
    // },
    // {
    //   to: "#",
    //   icon: Images.x,
    // },
    {
      to: "https://youtube.com/@autodocholding?si=1UkHB9OWVkqs6VYF",
      icon: Images.youtube,
    },
  ];
  return (
    <>
      <footer
        className="relative sm:pl-8 sm:pr-13 px-4 pt-15 pb-12.5 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${Images.footer}')`,
        }}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative">
          <div className="flex max-sm:flex-col justify-between gap-4">
            <div className="flex flex-col gap-5">
              {footerLinks.map((link, id) => (
                <Link
                  to={link.to}
                  key={id.toString()}
                  className="text-white sm:text-[32px] text-[24px] max-sm:text-center leading-[90%]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-8 bg-blur sm:w-118.75 sm:p-10 p-6 mt-5">
              <div className="p-2.5 text-white rounded-xl bg-white10 font-mono uppercase">
                .{t("contacts")}
              </div>
              <div className="font-mono">{t("addressCity")}</div>
              <div className="font-mono">+998 71 200 00 00</div>
              <div className="font-mono">
                {t("workingDays")} <br /> {t("workingHours")}
              </div>
              <div className="font-mono underline underline-offset-1 sm:mt-37.5">
                info@autodoc.uz
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col sm:justify-between justify-center items-end gap-4 sm:mt-45 mt-6">
            <img
              src={Images.AutodocLight}
              className="max-xl:h-20 xl:max-[1700px]:h-30 h-60 max-sm:h-10 max-sm:mx-auto"
              alt=""
            />
            <div className="flex gap-4 max-sm:mx-auto">
              {socialList.map((social, id) => (
                <a
                  key={id.toString()}
                  href={social.to}
                  target="_blank"
                  className="sm:w-19.5 w-15 sm:h-19.5 h-15 rounded-full bg-white15 border border-white20 backdrop-blur-[28px] center-content"
                >
                  <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
