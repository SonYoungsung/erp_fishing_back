import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    userByName: async (_, args) => {
      const { businessName } = args;
      return await prisma.user.findMany({
        where: {
          businessName: businessName,
        },
      });
    },
  },
};
