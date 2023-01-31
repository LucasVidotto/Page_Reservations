/*
  Warnings:

  - You are about to drop the column `people` on the `Testes` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Testes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "last" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_Testes" ("id", "last", "name", "phone") SELECT "id", "last", "name", "phone" FROM "Testes";
DROP TABLE "Testes";
ALTER TABLE "new_Testes" RENAME TO "Testes";
CREATE UNIQUE INDEX "Testes_phone_key" ON "Testes"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
