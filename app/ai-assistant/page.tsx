import { Sidebar } from "@/app/components/Sidebar"
import { AiAssistantContent } from "./AiAssistantContent"

export default async function AiAssistant() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <AiAssistantContent />
      </div>
    </div>
  )
}
