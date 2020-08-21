import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    updateCustomer: async (_, args) => {
      const {
        uid,
        businessName,
        ownerName = null,
        phoneNumber = null,
        licenseNumber = null,
        profile = null,
        pic = null,
      } = args;
      return await prisma.customer.update({
        where: {
          uid: uid,
          businessName: businessName,
        },
        data: {
          businessName: businessName,
          ownerName: ownerName,
          phoneNumber: phoneNumber,
          licenseNumber: licenseNumber,
          profile: profile,
          pic: pic,
        },
      });
    },
  },
};
