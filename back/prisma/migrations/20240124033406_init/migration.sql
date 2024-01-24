/*
  Warnings:

  - You are about to drop the `_PokemonAbilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PokemonEggGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PokemonTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PokemonAbilities" DROP CONSTRAINT "_PokemonAbilities_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonAbilities" DROP CONSTRAINT "_PokemonAbilities_B_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonEggGroups" DROP CONSTRAINT "_PokemonEggGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonEggGroups" DROP CONSTRAINT "_PokemonEggGroups_B_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonTypes" DROP CONSTRAINT "_PokemonTypes_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonTypes" DROP CONSTRAINT "_PokemonTypes_B_fkey";

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "abilities" TEXT[],
ADD COLUMN     "eggGroups" TEXT[],
ADD COLUMN     "types" TEXT[];

-- DropTable
DROP TABLE "_PokemonAbilities";

-- DropTable
DROP TABLE "_PokemonEggGroups";

-- DropTable
DROP TABLE "_PokemonTypes";
