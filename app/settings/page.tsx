import { Sidebar } from "@/app/components/Sidebar"
import { SettingsContent } from "./SettingsContent"

export default async function Settings() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <SettingsContent />
      </div>
    </div>
  )
}
