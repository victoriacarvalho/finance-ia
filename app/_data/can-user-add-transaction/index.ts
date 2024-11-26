import { auth } from "@clerk/nextjs/server";

export const canUserAddTransaction = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  // Permitir sempre que o usuário esteja autenticado
  return true;
};
