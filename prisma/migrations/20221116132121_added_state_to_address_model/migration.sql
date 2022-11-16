/*
  Warnings:

  - Added the required column `state` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addresses` ADD COLUMN `state` VARCHAR(191) NOT NULL;
