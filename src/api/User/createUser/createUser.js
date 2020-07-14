import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createUser: async (_, args) => {
      console.log(args);
      const { licenseNumber, email } = args;
      // const exists = await prisma.$exists.user({
      //   OR: [
      //     {
      //       licenseNumber,
      //     },
      //     { email },
      //   ],
      // });

      const userData = {
        email: email,
      };
      console.log(userData);
      // if (exists) {
      //   throw Error("이미 가입된 회원입니다. 가입 여부를 확인해주세요");
      // }

      return await prisma.user.create({
        data: args,
      });
    },
  },
};
