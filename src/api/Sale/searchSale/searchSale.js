import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchSale: async (_, args) => {
      const { uid, customerId, fromDate, toDate } = args;
      return await prisma.sale.findMany({
        where: {
          uid: uid,
          createdAt: {
            gte: new Date(fromDate),
            lte: new Date(toDate),
          },
        },
      });
    },
  },
};
