import { Sidebar } from "@/app/components/Sidebar"
import { IntegrationsContent } from "./IntegrationsContent"

export default async function Integrations() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <IntegrationsContent />
      </div>
    </div>
  )
}
