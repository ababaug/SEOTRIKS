import { Sidebar } from "@/app/components/Sidebar"
import { DashboardContent } from "./DashboardContent"
import { getDashboardMetrics } from "@/lib/data"

export default async function Dashboard() {
  const userId = "dummy-user-id"
  const metrics = await getDashboardMetrics(userId)

  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <DashboardContent metrics={metrics} />
      </div>
    </div>
  )
}
