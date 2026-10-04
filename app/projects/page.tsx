import { Sidebar } from "@/app/components/Sidebar"
import { ProjectsContent } from "./ProjectsContent"

export default async function Projects() {
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ProjectsContent />
      </div>
    </div>
  )
}
