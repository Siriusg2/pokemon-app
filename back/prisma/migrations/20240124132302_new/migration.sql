/*
  Warnings:

  - Made the column `teamId` on table `Pokemon` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_teamId_fkey";

-- AlterTable
ALTER TABLE "Pokemon" ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "pokemons" INTEGER[];
