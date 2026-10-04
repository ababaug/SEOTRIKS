import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getProjectCount(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true }
    })

    if (!user || !user.organizationId) return 0;

    const count = await prisma.project.count({
      where: {
        organizationId: user.organizationId
      }
    })
    return count
  } catch (error) {
    console.error("Failed to fetch project count:", error)
    return 0
  }
}

export async function getProjects(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true }
    })

    if (!user || !user.organizationId) return [];

    const projects = await prisma.project.findMany({
      where: {
        organizationId: user.organizationId
      }
    })
    return projects
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    return []
  }
}
