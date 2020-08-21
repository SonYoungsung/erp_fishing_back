# Migration `20200807002722-init`

This migration has been generated at 8/7/2020, 12:27:22 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `dagu`.`Customer` (
`address` varchar(191)   ,
`businessName` varchar(191) NOT NULL  ,
`id` int NOT NULL  AUTO_INCREMENT,
`licenseNumber` varchar(191)   ,
`ownerName` varchar(191)   ,
`phoneNumber` varchar(191)   ,
`pic` varchar(191)   ,
`profile` varchar(191)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`File` (
`id` int NOT NULL  ,
`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Product` (
`hotkeyNum` int   ,
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL  ,
`price` Decimal(65,30)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Sale` (
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
`customerId` int NOT NULL ,
`id` int NOT NULL  AUTO_INCREMENT,
`price` Decimal(65,30) NOT NULL  ,
`productId` int NOT NULL ,
`quantity` Decimal(65,30) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`User` (
`businessName` varchar(191) NOT NULL  ,
`email` varchar(191) NOT NULL  ,
`firstName` varchar(191) NOT NULL  ,
`id` int NOT NULL  AUTO_INCREMENT,
`lastName` varchar(191) NOT NULL  ,
`licenseNumber` varchar(191) NOT NULL  ,
`phoneNumber` varchar(191) NOT NULL  ,
`pic` varchar(191)   ,
`profile` varchar(191)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dagu`.`Buy` (
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
`customerId` int NOT NULL ,
`id` int NOT NULL  AUTO_INCREMENT,
`price` Decimal(65,30) NOT NULL  ,
`productId` int NOT NULL ,
`quantity` Decimal(65,30) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `Customer.businessName` ON `dagu`.`Customer`(`businessName`)

CREATE UNIQUE INDEX `Customer.licenseNumber` ON `dagu`.`Customer`(`licenseNumber`)

CREATE UNIQUE INDEX `Product.hotkeyNum` ON `dagu`.`Product`(`hotkeyNum`)

CREATE UNIQUE INDEX `Product.name` ON `dagu`.`Product`(`name`)

CREATE UNIQUE INDEX `User.email` ON `dagu`.`User`(`email`)

CREATE UNIQUE INDEX `User.licenseNumber` ON `dagu`.`User`(`licenseNumber`)

ALTER TABLE `dagu`.`Sale` ADD FOREIGN KEY (`customerId`) REFERENCES `dagu`.`Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dagu`.`Sale` ADD FOREIGN KEY (`productId`) REFERENCES `dagu`.`Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dagu`.`Buy` ADD FOREIGN KEY (`customerId`) REFERENCES `dagu`.`Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dagu`.`Buy` ADD FOREIGN KEY (`productId`) REFERENCES `dagu`.`Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE `dagu`.`_migration`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200807002722-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,67 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+model Customer {
+  businessName  String  @unique
+  id            Int     @default(autoincrement()) @id
+  licenseNumber String? @unique
+  ownerName     String?
+  phoneNumber   String?
+  pic           String?
+  profile       String?
+  sale          Sale[]
+  address String?
+}
+
+model File {
+  id  Int    @id
+  url String
+}
+
+model Product {
+  hotkeyNum Int? @unique
+  id        Int     @default(autoincrement()) @id
+  name      String  @unique
+  price     Float?
+  sale      Sale[]
+}
+
+model Sale {
+  createdAt  DateTime @default(now())
+  id         Int       @default(autoincrement()) @id
+  price      Float
+  quantity   Float
+  customer   Customer  @relation(fields: [customerId], references: [id])
+  product    Product  @relation(fields: [productId], references: [id])
+  customerId Int
+  productId Int
+}
+
+model User {
+  businessName  String
+  email         String  @unique
+  firstName     String
+  id            Int     @default(autoincrement()) @id
+  lastName      String
+  licenseNumber String  @unique
+  phoneNumber   String
+  pic           String?
+  profile       String?
+}
+
+model Buy {
+  createdAt  DateTime @default(now())
+  id         Int       @default(autoincrement()) @id
+  price      Float
+  quantity   Float
+  customer   Customer  @relation(fields: [customerId], references: [id])
+  product    Product  @relation(fields: [productId], references: [id])
+  customerId Int
+  productId Int
+}
```


