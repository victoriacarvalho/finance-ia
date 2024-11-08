import { db } from "../_lib/prisma";
import { DataTable } from "../_components/data-table";
import { transactionsColumns } from "./_colums";
import AddTransactionButton from "../_components/add-transaction-buton";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionPage;
