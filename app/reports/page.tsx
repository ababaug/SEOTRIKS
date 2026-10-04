import { Sidebar } from "@/app/components/Sidebar"
import { ReportsContent } from "./ReportsContent"

export default async function Reports() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ReportsContent />
      </div>
    </div>
  )
}
