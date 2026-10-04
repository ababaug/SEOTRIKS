import { Sidebar } from "@/app/components/Sidebar"
import { SiteAuditContent } from "./SiteAuditContent"

export default async function SiteAudit() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <SiteAuditContent />
      </div>
    </div>
  )
}
