import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchBuy: async (_, args) => {
      return await prisma.buy.findMany({
        where: args,
      });
    },
  },
};
