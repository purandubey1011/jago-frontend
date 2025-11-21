import { Listbox } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCurrencyStore } from "../components/store/currencyStore";

const countries = [
  { id: "IN", label: "India", currency: "₹" },
  { id: "UK", label: "United Kingdom", currency: "£" },
  { id: "US", label: "United States", currency: "$" },
  { id: "EU", label: "Europe", currency: "€" },
  { id: "AE", label: "UAE", currency: "د.إ" },
];

const CountryDropdown = ({ textColor }) => {
  const [selected, setSelected] = useState(
    () => JSON.parse(localStorage.getItem("country")) || countries[1]
  );

  const { setCurrency } = useCurrencyStore(); // ← GLOBAL SETTER

  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(selected));
  }, [selected]);

  return (
    <div className="relative w-40">
      <Listbox
        value={selected}
        onChange={(val) => {
          setSelected(val);
          setCurrency(val.currency); // ← GLOBAL STATE UPDATE
        }}
      >
        <div className="relative">
          <Listbox.Button
            className={`rounded-full flex items-center justify-between px-4 py-2 text-sm w-full cursor-pointer transition bg-white border border-gray-400 text-black`}
          >
            {selected.label}
            <FaChevronDown className="w-3 h-3 opacity-70 ml-2" />
          </Listbox.Button>

          <Listbox.Options className="absolute mt-2 w-full bg-white rounded-xl shadow-lg ring-1 ring-black/10 z-50 overflow-hidden">
            {countries.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 text-sm flex justify-between items-center ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-800"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span>{item.label}</span>
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

export default CountryDropdown;
