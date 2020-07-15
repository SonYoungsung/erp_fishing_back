import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  const result = await prisma.fish.create({
    data: {
     name: "광어",
     hotkeyNum: 1,
     price: 1
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
