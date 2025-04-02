"use client";

import {
  Select,
  SelectContent,
  SelectItem,
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

const getCurrentYear = () => new Date().getFullYear();
const CURRENT_YEAR = getCurrentYear();

const YEAR_OPTIONS = [{ value: CURRENT_YEAR.toString(), label: CURRENT_YEAR.toString() }];

const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const year = CURRENT_YEAR.toString();

  const handleChange = (value: string, type: "month" | "year") => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (type === "month") {
      newParams.set("month", value);
    } else {
      newParams.set("year", value);
    }
    push(`/?${newParams.toString()}`);
  };

  return (
    <div className="flex space-x-4">
      <Select
        onValueChange={(value) => handleChange(value, "month")}
        defaultValue={month ?? ""}
      >
        <SelectTrigger className="w-[150px] rounded-full">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {MONTH_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select disabled defaultValue={year}>
        <SelectTrigger className="w-[100px] rounded-full">
          <SelectValue placeholder="Ano" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={year}>{year}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelect;
