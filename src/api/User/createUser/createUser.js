import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createUser: async (_, args) => {
      //중복 확인 기능 추후 추가
      // const exists = await prisma.$exists.user({
      //   OR: [
      //     {
      //       licenseNumber,
      //     },
      //     { email },
      //   ],
      // });

      // if (exists) {
      //   throw Error("이미 가입된 회원입니다. 가입 여부를 확인해주세요");
      // }

      return await prisma.user.create({
        data: args,
      });
    },
  },
};
