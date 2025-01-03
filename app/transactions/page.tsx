import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_colums";
import AddTransactionButton from "../_components/add-transaction-buton";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TimeSelect from "./_components/time-select";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <div className="overflow-x-auto">
          <DataTable columns={transactionColumns} data={transactions} />
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
