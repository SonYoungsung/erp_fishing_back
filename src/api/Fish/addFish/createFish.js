import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createFish: async (_, args) => {
      return await prisma.fish.create({
        data: args,
      });
    },
  },
};
