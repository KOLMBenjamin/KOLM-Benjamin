/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Menu_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Menu_name_user_id_key" ON "Menu"("name", "user_id");
