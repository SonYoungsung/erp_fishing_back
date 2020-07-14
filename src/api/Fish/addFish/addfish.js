import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createFish: async (_, args) => {
      const { name, price, hotkeyNum } = args;
      const exists = await prisma.$exists.user({ name });

      if (exists) {
        throw Error("이미 등록된 종류입니다. 이름을 다르게 해주세요.");
      }
      return await prisma.createFish({
        name,
        price,
        hotkeyNum,
      });
    },
  },
};
