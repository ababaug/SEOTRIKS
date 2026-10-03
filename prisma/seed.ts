import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN',
      projects: {
        create: [
          {
            name: 'SEOtriks Dashboard',
            domain: 'seotriks.com'
          },
          {
            name: 'Client Alpha',
            domain: 'alpha.dev'
          }
        ]
      }
    }
  })
  console.log('Seeded User:', admin)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
