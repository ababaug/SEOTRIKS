import { Sidebar } from "@/app/components/Sidebar"
import { DashboardContent } from "./DashboardContent"

export default async function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <DashboardContent />
      </div>
    </div>
  )
}
