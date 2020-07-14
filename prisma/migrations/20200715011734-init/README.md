# Migration `20200715011734-init`

This migration has been generated at 7/15/2020, 1:17:34 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `dagu`.`User` (
`businessName` varchar(191) NOT NULL  ,`email` varchar(191) NOT NULL  ,`firstName` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`lastName` varchar(191) NOT NULL  ,`licenseNumber` int NOT NULL  ,`phoneNumber` int NOT NULL  ,`pic` varchar(191) NOT NULL  ,`profile` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Customer` (
`businessName` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`licenseNumber` int NOT NULL  ,`ownerName` varchar(191) NOT NULL  ,`phoneNumber` int NOT NULL  ,`pic` varchar(191) NOT NULL  ,`profile` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Fish` (
`hotkeyNum` int NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191) NOT NULL  ,`price` int NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Sale` (
`createdAt` datetime(3) NOT NULL  ,`id` int NOT NULL ,`price` int NOT NULL  ,`quantity` int NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`File` (
`id` int NOT NULL  ,`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `dagu`.`User`(`email`)

CREATE UNIQUE INDEX `User.licenseNumber` ON `dagu`.`User`(`licenseNumber`)

CREATE UNIQUE INDEX `Customer.businessName` ON `dagu`.`Customer`(`businessName`)

CREATE UNIQUE INDEX `Customer.licenseNumber` ON `dagu`.`Customer`(`licenseNumber`)

CREATE UNIQUE INDEX `Fish.name` ON `dagu`.`Fish`(`name`)

CREATE UNIQUE INDEX `Fish.hotkeyNum` ON `dagu`.`Fish`(`hotkeyNum`)

ALTER TABLE `dagu`.`Sale` ADD FOREIGN KEY (`id`) REFERENCES `dagu`.`Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dagu`.`Sale` ADD FOREIGN KEY (`id`) REFERENCES `dagu`.`Fish`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE `dagu`.`_migration`;

DROP TABLE `dagu`.`user`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200715011734-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,60 @@
+// This is your Prisma schema file,
+// learn more about it in the docs  https //pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id Int @id @default(autoincrement())
+  businessName  String 
+  email  String  @unique
+  firstName  String 
+  lastName  String 
+  phoneNumber  Int  
+  licenseNumber  Int  @unique
+  profile  String
+  pic  String
+}
+
+model Customer {
+  id Int @id @default(autoincrement())
+  businessName  String  @unique
+  ownerName  String
+  phoneNumber  Int
+  licenseNumber  Int @unique
+  profile  String
+  pic  String
+  sale Sale[] 
+}
+
+model Fish {
+  id Int @id @default(autoincrement())
+  name  String  @unique
+  price  Int
+  hotkeyNum  Int @unique
+}
+
+model Sale {
+  id Int @id @default(autoincrement())
+  customer Customer @relation(fields: [id], references: [id])
+  product  Fish @relation(fields: [id], references: [id])
+  quantity  Int 
+  price  Int 
+  createdAt  DateTime 
+}
+
+model File {
+  id Int @id
+  url  String 
+}
+
+
+
+
+
```


