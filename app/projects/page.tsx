import { Sidebar } from "@/app/components/Sidebar"
import { getProjects } from "@/lib/data"

export default async function Projects() {
  const userId = "dummy-user-id" // Hardcoded for demo/setup purposes
  const projects = await getProjects(userId)

  return (
    <div className="flex min-h-screen bg-[#0B132B]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <button className="bg-[#00F0FF] text-[#0B132B] px-4 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
            New Project
          </button>
        </div>

        <div className="bg-[#111C38] rounded-xl border border-white/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-[#1C2541]/50">
                <th className="px-6 py-4 text-[#94A3B8] font-medium text-sm tracking-wider">ID</th>
                <th className="px-6 py-4 text-[#94A3B8] font-medium text-sm tracking-wider">NAME</th>
                <th className="px-6 py-4 text-[#94A3B8] font-medium text-sm tracking-wider">DOMAIN</th>
                <th className="px-6 py-4 text-[#94A3B8] font-medium text-sm tracking-wider text-right">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-[#94A3B8]">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/5 hover:bg-[#1C2541]/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-[#64748B]">{project.id.slice(-6)}</td>
                    <td className="px-6 py-4 font-semibold text-white">{project.name}</td>
                    <td className="px-6 py-4 text-[#00F0FF]">{project.domain}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
