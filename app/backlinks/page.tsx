import { Sidebar } from "@/app/components/Sidebar"
import { BacklinksContent } from "./BacklinksContent"

export default async function Backlinks() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <BacklinksContent />
      </div>
    </div>
  )
}
