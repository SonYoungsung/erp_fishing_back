import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchCustomer: async (_, args) => {
      return await prisma.customer.findMany({
        where: {
          businessName: {
            contains: args.businessName,
          },
        },
      });
    },
  },
};
