import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchCustomer: async (_, args) => {
      const { businessName } = args;
      return await prisma.customer.findMany({
        where: {
          businessName: businessName,
        },
      });
    },
  },
};
