import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteProduct: async (_, args) => {
      try {
        await prisma.product.delete({
          where: args.id,
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
