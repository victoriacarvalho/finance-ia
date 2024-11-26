import { auth } from "@clerk/nextjs/server";

export const canUserAddTransaction = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  // Sem restrições para nenhum plano
  return true;
};
