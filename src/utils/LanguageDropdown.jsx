import { Listbox } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import i18n from "./i18n"; // 👈 import your i18n setup

const LanguageDropdown = ({ textColor, isLightBg }) => {
  const languages = [
    { id: "en", label: "English" },
    { id: "fr", label: "French" },
    { id: "es", label: "Español" },
    { id: "de", label: "German" },
  ];
  const [selected, setSelected] = useState(languages[0]);
  const location = useLocation();

  const isWhiteBgRoute =
    location.pathname === "/solutions" ||
    location.pathname === "/resources" ||
    location.pathname.startsWith("/program/");

  const handleChange = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang.id); // 👈 Switch language globally
    localStorage.setItem("lang", lang.id); // optional: remember user choice
  };

  return (
    <div className="relative w-40">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button
            className={`rounded-full flex items-center justify-between
              px-3 lg:px-6 py-1.5 text-sm w-full cursor-pointer transition
              ${
                isWhiteBgRoute
                  ? "bg-white border border-black text-black"
                  : isLightBg
                  ? "bg-black/5 border border-gray-300 " + textColor
                  : "bg-white/10 border border-white/20 " + textColor
              }`}
          >
            {selected.label}
            <FaChevronDown className="w-3 h-3 opacity-70 ml-2" />
          </Listbox.Button>

          <Listbox.Options className="absolute mt-2 w-full bg-white rounded-xl shadow-lg ring-1 ring-black/10 z-50 overflow-hidden">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.id}
                value={lang}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 text-sm flex justify-between items-center ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-800"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span>{lang.label}</span>
                    {selected && <FaCheck className="w-3 h-3 text-lime-600" />}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageDropdown;
