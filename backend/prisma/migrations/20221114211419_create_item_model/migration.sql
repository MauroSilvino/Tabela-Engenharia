-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `value` DOUBLE NULL,
    `quantity` DOUBLE NULL,
    `unity` VARCHAR(191) NULL,
    `projectId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
