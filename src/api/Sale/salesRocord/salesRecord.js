import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    lookUpSale: async (_, args) => {
      const { customer, fromDate, toDate } = args;
      return await prisma.sales({
        where: {
          AND: [
            { customer_contains: customer },
            { createdAt_lte: fromDate },
            { createdAt_gte: toDate },
          ],
        },
      });
    },
  },
};
