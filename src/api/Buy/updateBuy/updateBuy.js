import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    updateBuy: async (_, args) => {
      const { uid, id, price, quantity } = args;
      try {
        await prisma.buy.update({
          where: {
            uid,
            id,
          },
          data: {
            price,
            quantity,
          },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
