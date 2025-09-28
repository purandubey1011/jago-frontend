import { Listbox } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const LanguageDropdown = ({ textColor, isLightBg }) => {
  const languages =[
    { id: "en", label: "English" },
    { id: "fr", label: "Français" },
    { id: "es", label: "Español" },
    { id: "de", label: "Deutsch" }
]
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative w-40">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Button */}
          <Listbox.Button
            className={`bg-white/10 rounded-full flex items-center justify-between
              px-3 lg:px-6 xl:px-6 py-1.5 lg:py-2
              text-xs sm:text-sm lg:text-base xl:text-base
              w-full cursor-pointer transition
              ${textColor} ${isLightBg ? "bg-black/5 border border-gray-300" : "bg-white/10 border border-white/20"}`}
          >
            {selected.label}
            <FaChevronDown className="w-3 h-3 opacity-70 ml-2" />
          </Listbox.Button>

          {/* Options */}
          <Listbox.Options
            className="absolute mt-2 w-full bg-white rounded-xl shadow-lg ring-1 ring-black/10 focus:outline-none z-50 overflow-hidden"
          >
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
