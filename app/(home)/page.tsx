/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch, format, parse } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import AiReportButton from "./_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string; // Formato esperado: "YYYY-MM"
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  // Mês e ano atual
  const currentYearMonth = format(new Date(), "yyyy-MM"); // Formato 'YYYY-MM'
  
  // Verifica se o mês tem o formato correto (YYYY-MM) e se é uma data válida
  const monthIsInvalid =
    !month || !isMatch(month, "yyyy-MM") || isNaN(new Date(month).getTime());

  // Se o mês for inválido, redireciona para o mês atual
  if (monthIsInvalid || month !== currentYearMonth) {
    redirect(`?month=${currentYearMonth}`);
  }

  const dashboard = await getDashboard(month);
  const user = await (await clerkClient()).users.getUser(userId);

  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
