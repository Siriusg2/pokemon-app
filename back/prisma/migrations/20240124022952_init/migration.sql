/*
  Warnings:

  - You are about to drop the column `evolution` on the `Pokemon` table. All the data in the column will be lost.
  - Changed the type of `evolutions` on the `Pokemon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "evolution",
DROP COLUMN "evolutions",
ADD COLUMN     "evolutions" JSONB NOT NULL;
