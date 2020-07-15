import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createSale: async (_, args) => {
      const { businessName, product, quantity, price } = args;

      return await prisma.sale.create({
        data: {
          customer: {
            connect: {
              businessName: businessName,
            },
          },
          fish: {
            connect: {
              name: product,
            },
          },
          price,
          quantity,
        },
      });
    },
  },
};
