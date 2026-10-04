import { PrismaClient } from "@prisma/client"

// In development, Prisma instances must be attached to the global object to prevent connection leaks
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function getDashboardMetrics(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true }
    });

    if (!user || !user.organizationId) return { projectCount: 0, keywordCount: 0, avgHealth: 0 };

    const projectCount = await prisma.project.count({
      where: { organizationId: user.organizationId }
    });

    const projects = await prisma.project.findMany({
      where: { organizationId: user.organizationId },
      select: { id: true }
    });

    const projectIds = projects.map(p => p.id);

    const keywordCount = await prisma.keyword.count({
      where: { projectId: { in: projectIds } }
    });

    // Mock an average health score for the sake of the dashboard
    const avgHealth = 92;

    return { projectCount, keywordCount, avgHealth };
  } catch (error) {
    console.error("Failed to fetch dashboard metrics:", error);
    return { projectCount: 0, keywordCount: 0, avgHealth: 0 };
  }
}

export async function getProjects(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true }
    });

    if (!user || !user.organizationId) return [];

    const projects = await prisma.project.findMany({
      where: { organizationId: user.organizationId }
    });
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}
