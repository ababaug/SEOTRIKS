import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const org = await prisma.organization.create({
    data: {
      name: 'Acme Corp',
      billingPlan: 'PRO',
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

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {
      organizationId: org.id
    },
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN',
      organizationId: org.id
    }
  })

  console.log('Seeded Org:', org.name)
  console.log('Seeded User:', admin.email)
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
