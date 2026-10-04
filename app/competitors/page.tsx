import { Sidebar } from "@/app/components/Sidebar"
import { CompetitorsContent } from "./CompetitorsContent"

export default async function Competitors() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <CompetitorsContent />
      </div>
    </div>
  )
}
