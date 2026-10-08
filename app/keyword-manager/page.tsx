import { Sidebar } from "@/app/components/Sidebar"
import { KeywordManagerContent } from "./KeywordManagerContent"

export default async function KeywordManager() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <KeywordManagerContent />
      </div>
    </div>
  )
}
