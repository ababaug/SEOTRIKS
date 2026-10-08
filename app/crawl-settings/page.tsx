import { Sidebar } from "@/app/components/Sidebar"
import { CrawlSettingsContent } from "./CrawlSettingsContent"

export default async function CrawlSettings() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <CrawlSettingsContent />
      </div>
    </div>
  )
}
