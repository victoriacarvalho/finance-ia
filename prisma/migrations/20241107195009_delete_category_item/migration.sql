/*
  Warnings:

  - The values [SALARY] on the enum `TransactionCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionCategory_new" AS ENUM ('LIGHT', 'WATER', 'INTERNET', 'CONDOMINIUM', 'RENT', 'HOME_MAINTENANCE', 'TRANSPORTATION', 'FOOD', 'MARKET', 'ENTERTAINMENT', 'HEALTH', 'EDUCATION', 'OTHER', 'TRIP');
ALTER TABLE "Transaction" ALTER COLUMN "category" TYPE "TransactionCategory_new" USING ("category"::text::"TransactionCategory_new");
ALTER TYPE "TransactionCategory" RENAME TO "TransactionCategory_old";
ALTER TYPE "TransactionCategory_new" RENAME TO "TransactionCategory";
DROP TYPE "TransactionCategory_old";
COMMIT;
