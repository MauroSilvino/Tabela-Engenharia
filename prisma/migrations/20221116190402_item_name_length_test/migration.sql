-- DropIndex
DROP INDEX `projects_name_key` ON `projects`;

-- AlterTable
ALTER TABLE `projects` MODIFY `name` VARCHAR(500) NOT NULL;
