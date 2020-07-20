import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteCustomer: async (_, args) => {
      try {
        await prisma.customer.delete({
          where: args.id,
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
