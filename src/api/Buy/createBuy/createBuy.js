import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createBuy: async (_, args) => {
      const { customerId, productId, quantity, price } = args;

      return await prisma.buy.create({
        data: {
          customer: {
            connect: {
              id: customerId,
            },
          },
          product: {
            connect: {
              id: productId,
            },
          },
          price,
          quantity,
        },
      });
    },
  },
};
