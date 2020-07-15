import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createCustomer: async (_, args) => {
      const {
        businessName,
        ownerName = null,
        phoneNumber = null,
        licenseNumber = null,
        profile = null,
        pic = null,
      } = args;
      return await prisma.customer.create({
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