import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteBuy: async (_, args) => {
      try {
        await prisma.buy.delete({
          where: args,
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
