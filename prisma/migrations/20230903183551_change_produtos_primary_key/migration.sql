/*
  Warnings:

  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_produtos" ("createdAt", "id", "imagem", "nome", "preco", "quantidade", "updatedAt") SELECT "createdAt", "id", "imagem", "nome", "preco", "quantidade", "updatedAt" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
CREATE UNIQUE INDEX "produtos_nome_key" ON "produtos"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
