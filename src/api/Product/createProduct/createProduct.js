import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createProduct: async (_, args) => {
      return await prisma.product.create({
        data: args,
      });
    },
  },
};
