-- CreateTable
CREATE TABLE `authenticated_users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'VIEWER') NOT NULL DEFAULT 'VIEWER',
    `last_login` DATETIME(3) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `authenticated_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_tickets` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `project_type` ENUM('CUSTOM_HOME', 'BATHROOM_REMODEL', 'KITCHEN_REMODEL', 'FENCES', 'PATIO', 'FLOORING', 'PAINTING', 'ROOFING', 'CONCRETE', 'WINDOWS', 'OTHER') NOT NULL,
    `project_start` ENUM('ASAP', 'NEXT_3_MONTHS', 'NEXT_6_MONTHS', 'NEXT_6_MONTHS_PLUS') NOT NULL,
    `project_status` ENUM('UNCONFIRMED', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'UNCONFIRMED',
    `message` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `project_tickets_project_status_idx`(`project_status`),
    INDEX `project_tickets_project_type_idx`(`project_type`),
    INDEX `project_tickets_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `career_tickets` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `resume_url` VARCHAR(191) NOT NULL,
    `resume_name` VARCHAR(191) NOT NULL,
    `resume_size` INTEGER NOT NULL,
    `resume_type` ENUM('PDF', 'DOC', 'DOCX') NOT NULL DEFAULT 'PDF',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `career_tickets_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `width` INTEGER NULL,
    `height` INTEGER NULL,
    `size` INTEGER NULL,
    `mime_type` VARCHAR(191) NOT NULL,
    `category` ENUM('CUSTOM_HOME', 'BATHROOM_REMODEL', 'KITCHEN_REMODEL', 'FENCES', 'PATIO', 'FLOORING', 'PAINTING', 'ROOFING', 'CONCRETE', 'WINDOWS', 'OTHER') NOT NULL,
    `is_backdrop` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `sort_order` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `images_url_key`(`url`),
    INDEX `images_category_idx`(`category`),
    INDEX `images_is_backdrop_idx`(`is_backdrop`),
    INDEX `images_is_active_idx`(`is_active`),
    INDEX `images_sort_order_idx`(`sort_order`),
    INDEX `images_category_is_backdrop_is_active_idx`(`category`, `is_backdrop`, `is_active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_collections` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `category` ENUM('CUSTOM_HOME', 'BATHROOM_REMODEL', 'KITCHEN_REMODEL', 'FENCES', 'PATIO', 'FLOORING', 'PAINTING', 'ROOFING', 'CONCRETE', 'WINDOWS', 'OTHER') NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `sort_order` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `image_collections_category_idx`(`category`),
    INDEX `image_collections_is_active_idx`(`is_active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
