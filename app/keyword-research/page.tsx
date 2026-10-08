import { Sidebar } from "@/app/components/Sidebar"
import { KeywordResearchContent } from "./KeywordResearchContent"

export default async function KeywordResearch() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <KeywordResearchContent />
      </div>
    </div>
  )
}
