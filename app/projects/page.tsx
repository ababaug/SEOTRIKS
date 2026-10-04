import { Sidebar } from "@/app/components/Sidebar"
import { ProjectsContent } from "./ProjectsContent"
import { getProjects } from "@/lib/data"

export default async function Projects() {
  const userId = "dummy-user-id"
  const projects = await getProjects(userId)

  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ProjectsContent projects={projects} />
      </div>
    </div>
  )
}
