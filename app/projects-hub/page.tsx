import { Sidebar } from "@/app/components/Sidebar"
import { ProjectsHubContent } from "./ProjectsHubContent"
import { getProjects } from "@/lib/data"

export default async function ProjectsHub() {
  const userId = "dummy-user-id"
  const projects = await getProjects(userId)

  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <ProjectsHubContent projects={projects} />
      </div>
    </div>
  )
}
