import { Sidebar } from "@/app/components/Sidebar"
import { IndexingContent } from "./IndexingContent"

export default async function Indexing() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <IndexingContent />
      </div>
    </div>
  )
}
