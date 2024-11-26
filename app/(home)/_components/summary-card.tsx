import AddTransactionButton from "@/app/_components/add-transaction-buton";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card
      className={`${
        size === "large" || title === "Investido" ? "bg-white bg-opacity-5" : ""
      } p-4 rounded-md shadow-lg`}
    >
      <CardHeader className="flex items-center gap-4">
        {icon}
        <p
          className={`${
            size === "small"
              ? "text-muted-foreground text-sm sm:text-base"
              : "text-white opacity-70 text-lg sm:text-xl"
          }`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p
          className={`font-bold ${
            size === "small" ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {size === "large" && (
          <div className="hidden sm:block">
            <AddTransactionButton />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
