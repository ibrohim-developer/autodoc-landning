import { useEffect, useState } from "react";
import i18n from "@/i18";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "ru");

  const list = [
    {
      code: "ru",
      label: "RUS",
    },
    {
      code: "uz",
      label: "UZB",
    },
    {
      code: "en",
      label: "ENG",
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
      className={`nav-bg ${className} dropdown rounded-xl py-[var(--nav-pad-y)] px-[var(--nav-pad-x)] flex items-center gap-[var(--nav-gap)]`}
    >
      <div className="font-mono text-[length:var(--nav-text)] leading-[0.8]">
        {currentLanguageData.label}
      </div>

      <div className="dropdown-container lang-dropdown flex flex-col">
        {list.map((item) => (
          <div
            key={item.code}
            onClick={() => changeLanguage(item.code)}
            className={`text-[length:var(--nav-text)] font-mono leading-[0.8] cursor-pointer transition-colors hover:text-white ${
              item.code === currentLanguageData.code
                ? "text-white"
                : "text-white/60"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
