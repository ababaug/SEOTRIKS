import { AboutMarketingContent } from "./AboutMarketingContent"
import { Header } from "@/app/components/Header"

export default async function AboutMarketing() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Header />
      <div className="flex-1 overflow-x-hidden">
        <AboutMarketingContent />
      </div>
    </div>
  )
}
