import { Sidebar } from "@/app/components/Sidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getProjectCount } from "@/lib/data"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  const userId = (session.user as any).id
  const projectCount = await getProjectCount(userId)

  return (
    <div className="flex min-h-screen bg-[#0B132B]">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111C38] rounded-xl p-6 border border-white/5 shadow-[0_8px_30px_-4px_rgba(0,240,255,0.08)]">
            <h3 className="text-[#94A3B8] text-sm font-medium mb-2 uppercase tracking-wider">Total Projects</h3>
            <div className="text-4xl font-bold text-[#00F0FF] font-mono">
              {projectCount}
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-[#10B981] flex items-center bg-[#10B981]/10 px-2 py-1 rounded-full">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Active
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
