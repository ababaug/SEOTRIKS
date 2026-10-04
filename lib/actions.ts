"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"

const prisma = new PrismaClient()

async function getSessionOrThrow() {
  const session = await getServerSession()
  if (!session || !session.user) {
    throw new Error('Unauthorized')
  }
  return session
}

export async function createProject(formData: FormData) {
  await getSessionOrThrow()
  const name = formData.get('name') as string
  const domain = formData.get('domain') as string
  const organizationId = formData.get('organizationId') as string

  if (!name || !domain || !organizationId) {
    throw new Error('Missing required fields')
  }

  await prisma.project.create({
    data: {
      name,
      domain,
      organizationId
    }
  })

  revalidatePath('/projects')
  revalidatePath('/projects-hub')
}

export async function deleteProject(projectId: string) {
  await getSessionOrThrow()
  await prisma.project.delete({
    where: { id: projectId }
  })

  revalidatePath('/projects')
  revalidatePath('/projects-hub')
}

export async function createKeyword(formData: FormData) {
  await getSessionOrThrow()
  const term = formData.get('term') as string
  const projectId = formData.get('projectId') as string

  if (!term || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.keyword.create({
    data: {
      term,
      projectId,
      volume: Math.floor(Math.random() * 10000), // Mock data
      difficulty: Math.floor(Math.random() * 100), // Mock data
    }
  })

  revalidatePath('/keyword-manager')
}
