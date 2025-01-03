import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";
import { auth } from "@clerk/nextjs/server";

export const getDashboard = async (month: string, year: string) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Cálculo da última e primeira data do mês

  const firstDayOfMonth = new Date(Number(year), Number(month) - 1, 1); // Primeiro dia do mês

  const where = {
    userId,
    date: {
      gte: firstDayOfMonth,  // primeiro dia do mês
      lt: new Date(Number(year), Number(month), 0), // último dia do mês
    },
  };

  // Somatórios para diferentes tipos de transações
  const depositsTotal = await db.transaction.aggregate({
    where: { ...where, type: "DEPOSIT" },
    _sum: { amount: true },
  }).then(result => result._sum?.amount ?? 0);

  const investmentsTotal = await db.transaction.aggregate({
    where: { ...where, type: "INVESTMENT" },
    _sum: { amount: true },
  }).then(result => result._sum?.amount ?? 0);

  const expensesTotal = await db.transaction.aggregate({
    where: { ...where, type: "EXPENSE" },
    _sum: { amount: true },
  }).then(result => result._sum?.amount ?? 0);

  // Calculo do saldo
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  // Somatório total de transações
  const transactionsTotal = await db.transaction.aggregate({
    where,
    _sum: { amount: true },
  }).then(result => result._sum.amount ?? 0);

  // Porcentagem por tipo de transação
  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (depositsTotal / transactionsTotal) * 100
    ),
    [TransactionType.EXPENSE]: Math.round(
      (expensesTotal / transactionsTotal) * 100
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (investmentsTotal / transactionsTotal) * 100
    ),
  };

  // Somatório de despesas por categoria
  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: category._sum.amount ?? 0,
    percentageOfTotal: Math.round(
      (category._sum.amount / expensesTotal) * 100
    ),
  }));

  // Últimas transações
  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 15,
  });

  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions,
  };
};
