import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createBuy: async (_, args) => {
      const { uid, busineName, productId, quantity, price } = args;

      return await prisma.buy.create({
        data: {
          customer: {
            connect: {
              busineName: busineName,
            },
          },
          product: {
            connect: {
              id: productId,
            },
          },
          price,
          quantity,
          uid,
        },
      });
    },
  },
};
