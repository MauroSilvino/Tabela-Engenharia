/*
  Warnings:

  - You are about to alter the column `name` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(191)`.
  - A unique constraint covering the columns `[name]` on the table `projects` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `items` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `projects` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `projects_name_key` ON `projects`(`name`);
