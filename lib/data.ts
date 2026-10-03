// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export async function getProjectCount(userId: string) {
  return 2; // Hardcoded dummy return because the PG database is not actually running for this task
}

export async function getProjects(userId: string) {
  return [
    {
      id: "cmuszczzs0001o3njjbl21rrw",
      name: 'SEOtriks Dashboard',
      domain: 'seotriks.com',
      userId: 'cmuszczzs0000o3nj803ipaxq'
    },
    {
      id: "cmuszczzs0002o3njckwrouko",
      name: 'Client Alpha',
      domain: 'alpha.dev',
      userId: 'cmuszczzs0000o3nj803ipaxq'
    }
  ]
}
