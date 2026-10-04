import { Sidebar } from "@/app/components/Sidebar"
import { CommandCenterContent } from "./CommandCenterContent"

export default async function CommandCenter() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <CommandCenterContent />
      </div>
    </div>
  )
}
