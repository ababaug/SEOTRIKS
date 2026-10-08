import { Sidebar } from "@/app/components/Sidebar"
import { EdgeRulesContent } from "./EdgeRulesContent"

export default async function EdgeRules() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <EdgeRulesContent />
      </div>
    </div>
  )
}
