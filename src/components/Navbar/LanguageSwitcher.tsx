import { useEffect, useState } from "react";
import i18n from "@/i18";
import useDropdown from "./useDropdown";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "ru");
  const { open, setOpen, ref, toggle } = useDropdown<HTMLDivElement>();

  // `short` sits in the closed pill, `label` is the endonym shown in the open
  // panel — neither goes through i18n, they always read in their own language.
  const list = [
    {
      code: "ru",
      short: "Ру",
      label: "Русский",
    },
    {
      code: "uz",
      short: "Uz",
      label: "O‘zbek",
    },
    {
      code: "en",
      short: "En",
      label: "English",
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
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      onClick={toggle}
      aria-expanded={open}
      className={`nav-bg ${className} dropdown rounded-xl py-[var(--nav-pad-y)] px-[var(--nav-pad-x)] flex items-center gap-[var(--nav-gap)] ${
        open ? "is-open" : ""
      }`}
    >
      <div className="font-mono text-[length:var(--nav-text)] leading-[0.8]">
        {currentLanguageData.short}
      </div>

      <div
        className="dropdown-container lang-dropdown flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {list.map((item) => (
          <div
            key={item.code}
            onClick={() => changeLanguage(item.code)}
            className={`text-[length:var(--nav-text)] font-mono leading-[0.8] whitespace-nowrap cursor-pointer transition-colors hover:text-white ${
              item.code === currentLanguageData.code
                ? "text-white"
                : "text-white/90"
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
