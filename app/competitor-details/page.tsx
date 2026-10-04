import { Sidebar } from "@/app/components/Sidebar"
import { CompetitorDetailsContent } from "./CompetitorDetailsContent"

export default async function CompetitorDetails() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <CompetitorDetailsContent />
      </div>
    </div>
  )
}
