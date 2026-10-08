import { Sidebar } from "@/app/components/Sidebar"
import { TeamRbacContent } from "./TeamRbacContent"

export default async function TeamRbac() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <TeamRbacContent />
      </div>
    </div>
  )
}
