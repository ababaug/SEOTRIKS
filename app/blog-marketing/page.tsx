import { BlogMarketingContent } from "./BlogMarketingContent"
import { Header } from "@/app/components/Header"

export default async function BlogMarketing() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Header />
      <div className="flex-1 overflow-x-hidden">
        <BlogMarketingContent />
      </div>
    </div>
  )
}
