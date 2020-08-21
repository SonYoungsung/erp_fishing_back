import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchProduct: async (_, args) => {
      return await prisma.product.findMany({
        where: {
          uid: uid,
          name: {
            contains: args.name,
          },
        },
      });
    },
  },
};
