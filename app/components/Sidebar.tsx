import Link from 'next/link'
import { LayoutDashboard, FolderKanban, FileSearch } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-[#293241] bg-[#0B132B] h-screen flex flex-col pt-6">
      <div className="px-6 mb-8 text-[#00F0FF] font-bold text-xl tracking-tighter">
        LUMINOUS INTELLIGENCE
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#dbe1ff] hover:bg-[#1C2541] hover:text-[#00F0FF] transition-colors border border-transparent hover:border-[#00F0FF]/25 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,240,255,0.08)]">
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-semibold text-sm">Dashboard</span>
        </Link>
        <Link href="/projects" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#dbe1ff] hover:bg-[#1C2541] hover:text-[#00F0FF] transition-colors border border-transparent hover:border-[#00F0FF]/25 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,240,255,0.08)]">
          <FolderKanban className="w-5 h-5" />
          <span className="font-semibold text-sm">Projects</span>
        </Link>
        <Link href="/keywords" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#dbe1ff] hover:bg-[#1C2541] hover:text-[#00F0FF] transition-colors border border-transparent hover:border-[#00F0FF]/25 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,240,255,0.08)]">
          <FileSearch className="w-5 h-5" />
          <span className="font-semibold text-sm">Keywords</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-[#1C2541]">
        <div className="text-xs text-[#64748B] mb-2 px-2 uppercase tracking-wider">System Status</div>
        <div className="flex items-center space-x-2 px-2">
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
          <span className="text-sm text-[#10B981]">All systems operational</span>
        </div>
      </div>
    </aside>
  )
}
