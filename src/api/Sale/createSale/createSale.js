import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createSale: async (_, args) => {
      return await prisma.sale.create({
        data: args,
      });
    },
  },
};
