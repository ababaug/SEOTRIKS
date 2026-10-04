# SEOtriks Application Folder Structure

This architecture is designed for a scalable Next.js (App Router) full-stack application supporting ~67 screens, comprehensive SEO logic, and a full Postgres/Supabase database integration.

```text
seotriks/
├── app/                              # Next.js App Router root
│   ├── (auth)/                       # Auth routing group
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (dashboard)/                  # Dashboard routing group (authenticated)
│   │   ├── layout.tsx                # Shared Sidebar & Header layout
│   │   ├── dashboard/                # Main Overview (Screen 1)
│   │   │   └── page.tsx
│   │   ├── projects/                 # Project Management
│   │   │   ├── page.tsx              # Projects List
│   │   │   └── [id]/                 # Single Project Details
│   │   ├── keywords/                 # Keyword Manager & Tracking
│   │   │   ├── page.tsx              # Keyword List
│   │   │   ├── research/page.tsx     # Keyword Research tool
│   │   │   └── [id]/page.tsx         # Keyword details
│   │   ├── backlinks/                # Backlink Intelligence
│   │   │   ├── page.tsx
│   │   │   └── opportunities/page.tsx
│   │   ├── technical-seo/            # Tech SEO & Auditing
│   │   │   ├── page.tsx              # Audit Hub
│   │   │   ├── issues/page.tsx
│   │   │   └── crawler-settings/page.tsx
│   │   ├── content/                  # Content Hub & AI Writer
│   │   │   ├── page.tsx
│   │   │   ├── brief/page.tsx
│   │   │   └── editor/page.tsx
│   │   ├── reports/                  # Reporting Studio
│   │   │   ├── page.tsx
│   │   │   └── builder/page.tsx
│   │   ├── alerts/                   # Incident & Alert Center
│   │   │   └── page.tsx
│   │   └── settings/                 # App Settings & RBAC
│   │       ├── organization/page.tsx
│   │       ├── team/page.tsx
│   │       ├── billing/page.tsx
│   │       └── integrations/page.tsx
│   ├── (marketing)/                  # Public facing marketing site
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/page.tsx
│   ├── api/                          # Next.js API Routes (Serverless Functions)
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── projects/route.ts
│   │   ├── keywords/route.ts
│   │   └── webhooks/route.ts
│   ├── components/                   # Shared UI Components (Stitch Design System)
│   │   ├── ui/                       # Base components (Buttons, Inputs, Cards)
│   │   ├── layout/                   # Structural (Header, Sidebar, Modals)
│   │   ├── data-display/             # Tables, Charts, Stat Cards
│   │   └── feedback/                 # Toast, Loading, Empty states
│   ├── globals.css                   # Global Tailwind styles & Design Tokens
│   └── layout.tsx                    # Root layout
│
├── lib/                              # Core Application Logic
│   ├── auth.ts                       # NextAuth configuration
│   ├── prisma.ts                     # Prisma client singleton
│   ├── utils.ts                      # Shared utility functions (clsx, twMerge)
│   ├── actions/                      # Server Actions (Mutations)
│   │   ├── user.actions.ts
│   │   ├── project.actions.ts
│   │   └── keyword.actions.ts
│   └── services/                     # Business logic and external API wrappers
│       ├── seo-engine.ts             # Third-party SEO API integrations
│       └── billing.ts                # Stripe/Billing logic
│
├── prisma/                           # Database Configuration
│   ├── schema.prisma                 # Database schema models
│   ├── seed.ts                       # Development seed data
│   └── migrations/                   # DB migration history
│
├── types/                            # Global TypeScript definitions
│   ├── database.types.ts             # Inferred types from Prisma
│   └── ui.types.ts                   # Prop definitions for components
│
├── hooks/                            # Custom React Hooks
│   ├── use-projects.ts               # Data fetching hooks (e.g. SWR/React Query)
│   └── use-mobile-sidebar.ts         # UI state hooks
│
├── public/                           # Static Assets (Images, Icons, Fonts)
├── middleware.ts                     # Next.js Edge Middleware (Auth routing, edge rules)
├── next.config.js                    # Next.js Config
├── tailwind.config.js                # Tailwind CSS Configuration
├── package.json
└── README.md
```
