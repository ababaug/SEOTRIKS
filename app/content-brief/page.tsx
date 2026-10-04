import { Sidebar } from "@/app/components/Sidebar"
import { ContentBriefContent } from "./ContentBriefContent"

export default async function ContentBrief() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ContentBriefContent />
      </div>
    </div>
  )
}
