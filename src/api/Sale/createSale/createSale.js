import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createSale: async (_, args) => {
      const { customerId, productId, quantity, price } = args;

      return await prisma.sale.create({
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
