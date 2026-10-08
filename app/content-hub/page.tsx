import { Sidebar } from "@/app/components/Sidebar"
import { ContentHubContent } from "./ContentHubContent"

export default async function ContentHub() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ContentHubContent />
      </div>
    </div>
  )
}
