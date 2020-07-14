import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const result = await prisma.user.create({
    data: {
      email: "sysgigigi2@gmail.com",
      businessName: "다구수산",
      firstName: "혜연",
      lastName: "김",
      phoneNumber: 1033636258,
      licenseNumber: 1102245,
      profile: "",
      pic: ""
    }
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
