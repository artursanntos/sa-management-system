/*
  Warnings:

  - You are about to drop the column `idCompra` on the `compras` table. All the data in the column will be lost.
  - Added the required column `idProduto` to the `compras` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_compras" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "AddedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_compras" ("id") SELECT "id" FROM "compras";
DROP TABLE "compras";
ALTER TABLE "new_compras" RENAME TO "compras";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
