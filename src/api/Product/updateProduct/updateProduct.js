import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    updateProduct: async (_, args) => {
      const { uid, id, name, price = null, hotkeyNum = null } = args;
      try {
        await prisma.product.update({
          where: {
            id,
            uid,
          },
          data: {
            name,
            price,
            hotkeyNum,
          },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
