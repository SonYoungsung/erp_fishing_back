import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createCustomer: async (_, args) => {
      const {
        email,
        businessName,
        firstName,
        lastName,
        phoneNumber,
        licenseNumber,
        profile,
        pic,
      } = args;
      const exists = await prisma.$exists.customer({
        OR: [
          {
            licenseNumber,
          },
          { businessName },
        ],
      });
      if (exists) {
        throw Error(
          "이미 등록된 사업자입니다. 이름이나 사업자 번호를 확인해주세요."
        );
      }

      return await prisma.createCustomer({
        email,
        businessName,
        firstName,
        lastName,
        phoneNumber,
        licenseNumber,
        profile,
        pic,
      });
    },
  },
};
