import { auth} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch, format } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";

interface HomeProps {
  searchParams: {
    month: string; // Formato esperado: "MM"
    year: string;  // Formato esperado: "YYYY"
  };
}

const Home = async ({ searchParams: { month, year } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const currentYear = format(new Date(), "yyyy");
  const currentMonth = format(new Date(), "MM");

  // Verifica se o ano e mês são válidos
  const yearIsValid = year && !isNaN(Number(year));
  const monthIsValid = month && !isNaN(Number(month)) && isMatch(`${year}-${month}`, "yyyy-MM");

  // Se a data for inválida ou não estiver presente, redireciona para o mês/ano atual
  if (!monthIsValid || !yearIsValid || Number(year) > currentYear || (Number(year) === Number(currentYear) && Number(month) > Number(currentMonth))) {
    redirect(`?month=${currentMonth}&year=${currentYear}`);
  }

  // Chama a função que pega os dados, agora com base no mês e ano
  const dashboard = await getDashboard(month, year);

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
            <SummaryCards month={month} year={year} {...dashboard} />
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
