import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteCustomer: async (_, args) => {
      const { businessName } = args;
      return await prisma.customer.delete({
        where: {
          businessName: businessName,
        },
      });
    },
  },
};
