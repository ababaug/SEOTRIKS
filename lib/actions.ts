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

export async function createRole(formData: FormData) {
  await getSessionOrThrow()
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const organizationId = formData.get('organizationId') as string

  if (!name || !organizationId) {
    throw new Error('Missing required fields')
  }

  // Parse permissions from form data. In a real app this would be more complex
  // based on how the checkboxes map to FormData, but for simplicity here we
  // just assume we get a stringified JSON array or parse specific keys.

  await prisma.role.create({
    data: {
      name,
      description,
      organizationId
    }
  })

  revalidatePath('/team-rbac')
}

export async function createBlogPost(formData: FormData) {
  const session = await getSessionOrThrow()
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  if (!title || !content || !category) {
    throw new Error('Missing required fields')
  }

  await prisma.blogPost.create({
    data: {
      title,
      content,
      category,
      slug,
      authorId: (session.user as any)?.email || ''
    }
  })

  revalidatePath('/blog-full')
}

export async function createPageStatus(formData: FormData) {
  await getSessionOrThrow()
  const url = formData.get('url') as string
  const title = formData.get('title') as string
  const projectId = formData.get('projectId') as string

  if (!url || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.pageStatus.create({
    data: {
      url,
      title,
      projectId,
      healthScore: Math.floor(Math.random() * 40) + 60,
      organicTraffic: Math.floor(Math.random() * 5000),
      keywordCount: Math.floor(Math.random() * 200),
      issues: Math.floor(Math.random() * 10)
    }
  })

  revalidatePath('/page-explorer')
}

export async function createContentOpportunity(formData: FormData) {
  await getSessionOrThrow()
  const topic = formData.get('topic') as string
  const projectId = formData.get('projectId') as string

  if (!topic || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.contentOpportunity.create({
    data: {
      topic,
      projectId,
      searchVolume: Math.floor(Math.random() * 10000),
      difficulty: Math.floor(Math.random() * 100),
      relevanceScore: Math.random() * 10
    }
  })

  revalidatePath('/content-opps')
}

export async function createWebhook(formData: FormData) {
  await getSessionOrThrow()
  const name = formData.get('name') as string
  const url = formData.get('url') as string
  const events = formData.get('events') as string || '[]'
  const projectId = formData.get('projectId') as string

  if (!name || !url || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.webhook.create({
    data: {
      name,
      url,
      events,
      projectId,
      secret: "whsec_" + Math.random().toString(36).substring(2, 15)
    }
  })

  revalidatePath('/webhooks')
}

export async function createOnPageAudit(formData: FormData) {
  await getSessionOrThrow()
  const url = formData.get('url') as string
  const targetKeyword = formData.get('targetKeyword') as string
  const projectId = formData.get('projectId') as string

  if (!url || !targetKeyword || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.onPageSeoAudit.create({
    data: {
      url,
      targetKeyword,
      projectId,
      score: Math.floor(Math.random() * 40) + 60,
      titleStatus: "OPTIMIZED",
      metaStatus: "OPTIMIZED",
      h1Status: "OPTIMIZED",
      contentLength: 1200
    }
  })

  revalidatePath('/onpage-seo')
}

export async function createTechIssue(formData: FormData) {
  await getSessionOrThrow()
  const url = formData.get('url') as string
  const type = formData.get('type') as string
  const severity = formData.get('severity') as string
  const projectId = formData.get('projectId') as string

  if (!url || !type || !severity || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.technicalIssue.create({
    data: {
      url,
      type,
      severity,
      projectId
    }
  })

  revalidatePath('/technical-seo')
}

export async function createEdgeRule(formData: FormData) {
  await getSessionOrThrow()
  const name = formData.get('name') as string
  const pattern = formData.get('pattern') as string
  const action = formData.get('action') as string
  const projectId = formData.get('projectId') as string

  if (!name || !pattern || !action || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.edgeRule.create({
    data: {
      name,
      pattern,
      action,
      projectId
    }
  })

  revalidatePath('/edge-manager')
}

export async function setupJiraIntegration(formData: FormData) {
  await getSessionOrThrow()
  const domain = formData.get('domain') as string
  const projectKey = formData.get('projectKey') as string
  const projectId = formData.get('projectId') as string

  if (!domain || !projectKey || !projectId) {
    throw new Error('Missing required fields')
  }

  await prisma.jiraIntegration.upsert({
    where: { projectId },
    update: {
      domain,
      projectKey,
    },
    create: {
      domain,
      projectKey,
      projectId
    }
  })

  revalidatePath('/jira-modal')
}
