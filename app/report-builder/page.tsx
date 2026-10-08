import { Sidebar } from "@/app/components/Sidebar"
import { ReportBuilderContent } from "./ReportBuilderContent"

export default async function ReportBuilder() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ReportBuilderContent />
      </div>
    </div>
  )
}
