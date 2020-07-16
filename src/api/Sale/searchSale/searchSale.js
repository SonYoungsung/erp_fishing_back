import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchSale: async (_, args) => {
      const { customerId, fromDate, toDate } = args;
      return await prisma.sale.findMany({
        where: {
          createdAt: {
            gte: new Date(fromDate),
            lte: new Date(toDate),
          },
        },
      });
    },
  },
};
