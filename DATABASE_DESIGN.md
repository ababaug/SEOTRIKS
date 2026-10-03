# SEOtriks Database Schema Design

This document details the complete relational database design for the SEOtriks SaaS platform, designed for deployment on PostgreSQL (e.g., Supabase).

## Core Entities & Relationships

### `Organization`
Represents a company or team workspace.
- **Fields:**
  - `id` (UUID, PK)
  - `name` (String, Required)
  - `billingPlan` (String, e.g., 'FREE', 'PRO', 'ENTERPRISE', Default 'FREE')
  - `createdAt`, `updatedAt` (DateTime)
- **Relationships:**
  - One-to-Many with `User`
  - One-to-Many with `Project`

### `User`
Represents an individual user.
- **Fields:**
  - `id` (UUID, PK)
  - `email` (String, Unique, Required)
  - `name` (String, Optional)
  - `role` (String, e.g., 'OWNER', 'ADMIN', 'MEMBER', Default 'MEMBER')
  - `organizationId` (UUID, FK, Optional for invites)
  - `createdAt`, `updatedAt` (DateTime)
- **Relationships:**
  - Many-to-One with `Organization`
  - One-to-Many with `AuditLog` (Actions performed by this user)

### `Project`
Represents a specific website or domain being tracked/analyzed.
- **Fields:**
  - `id` (UUID, PK)
  - `name` (String, Required)
  - `domain` (String, Required)
  - `organizationId` (UUID, FK)
  - `createdAt`, `updatedAt` (DateTime)
- **Relationships:**
  - Many-to-One with `Organization`
  - One-to-Many with `Keyword`
  - One-to-Many with `Backlink`
  - One-to-Many with `SiteAudit`
  - One-to-Many with `Report`

### `Keyword`
Represents a search query being tracked for a specific project.
- **Fields:**
  - `id` (UUID, PK)
  - `term` (String, Required)
  - `volume` (Int, Optional)
  - `difficulty` (Int, Optional)
  - `currentRank` (Int, Optional)
  - `projectId` (UUID, FK)
  - `createdAt`, `updatedAt` (DateTime)
- **Relationships:**
  - Many-to-One with `Project`

### `SiteAudit`
Represents a technical SEO crawl/audit run for a project.
- **Fields:**
  - `id` (UUID, PK)
  - `healthScore` (Float, Optional)
  - `pagesCrawled` (Int, Default 0)
  - `issuesFound` (Int, Default 0)
  - `status` (String, e.g., 'PENDING', 'RUNNING', 'COMPLETED', 'FAILED')
  - `projectId` (UUID, FK)
  - `startedAt` (DateTime)
  - `completedAt` (DateTime, Optional)
- **Relationships:**
  - Many-to-One with `Project`

### `Backlink`
Represents an inbound link tracking record.
- **Fields:**
  - `id` (UUID, PK)
  - `url` (String, Required)
  - `domainAuthority` (Int, Optional)
  - `anchorText` (String, Optional)
  - `status` (String, e.g., 'ACTIVE', 'LOST')
  - `projectId` (UUID, FK)
  - `discoveredAt` (DateTime)
- **Relationships:**
  - Many-to-One with `Project`

### `Report`
Represents a saved or generated report configuration.
- **Fields:**
  - `id` (UUID, PK)
  - `title` (String, Required)
  - `type` (String, e.g., 'MONTHLY_SUMMARY', 'AUDIT_RESULT')
  - `config` (JSON, Required)
  - `projectId` (UUID, FK)
  - `createdAt`, `updatedAt` (DateTime)
- **Relationships:**
  - Many-to-One with `Project`

### `AuditLog`
System audit trail for security and RBAC tracking.
- **Fields:**
  - `id` (UUID, PK)
  - `action` (String, Required)
  - `entityType` (String, Required)
  - `entityId` (String, Required)
  - `userId` (UUID, FK)
  - `details` (JSON, Optional)
  - `timestamp` (DateTime, Default Now)
- **Relationships:**
  - Many-to-One with `User`
