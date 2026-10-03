import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getProjectCount(userId: string) {
  try {
    const count = await prisma.project.count({
      where: {
        userId: userId
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
    const projects = await prisma.project.findMany({
      where: {
        userId: userId
      }
    })
    return projects
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    return []
  }
}
