"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const CURRENT_YEAR = new Date().getFullYear().toString();

const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");

  const handleChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("month", value);
    newParams.set("year", CURRENT_YEAR);
    push(`/?${newParams.toString()}`);
  };

  return (
    <div className="flex space-x-4">
      <Select
        onValueChange={handleChange}
        defaultValue={month ?? ""}
      >
        <SelectTrigger className="w-[150px] rounded-full">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <div className="absolute bg-white shadow-md rounded-md mt-1 w-full">
          {MONTH_OPTIONS.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </Select>
      <div className="w-[100px] text-center py-2 border rounded-full bg-gray-100 text-gray-600">
        {CURRENT_YEAR}
      </div>
    </div>
  );
};

export default TimeSelect;
