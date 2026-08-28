import { useEffect, useState } from "react";
import i18n from "@/i18";
import Images from "@/assets/images";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "ru");

  const list = [
    {
      code: "ru",
      name: "Русский",
      img: Images.RU,
    },
    {
      code: "uz",
      name: "O’zbek",
      img: Images.UZ,
    },
    {
      code: "en",
      name: "English",
      img: Images.GB,
    },
  ];

  useEffect(() => {
    const handleLanguageChanged = (language: string) => {
      setCurrentLanguage(language);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const currentLanguageData =
    list.find((item) => item.code === currentLanguage) || list[0];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("autodoc-language", language);
  };

  return (
    <div
      className={`nav-bg ${className} dropdown rounded-xl py-4 px-5 flex items-center gap-8`}
    >
      <img src={currentLanguageData.img} alt="" />

      <div className="dropdown-container flex flex-col gap-8.5">
        {list.map((item) => (
          <div
            key={item.code}
            onClick={() => changeLanguage(item.code)}
            className="flex items-center gap-2.5 text-[12px] font-mono leading-none cursor-pointer"
          >
            <img src={item.img} alt="" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
