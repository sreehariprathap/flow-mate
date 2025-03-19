import SimpleAppHeader from "@/components/simpleAppHeader"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full z-10 p-5">
        <SimpleAppHeader
          title="Editor"
          subtitle="edit your flow"
        />
      </div>
        {children}
    </div>
  )
}
export default layout