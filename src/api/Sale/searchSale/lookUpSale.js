import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchSale: async (_, args) => {
      const { customerName, fromDate, toDate } = args;
      return await prisma.sale.findMany({
        where: {
          customer: {
            businessName: customerName,
          },

          date_created: {
            AND: [{ gte: fromDate }, { lte: toDate }],
          },
        },
      });
    },
  },
};
