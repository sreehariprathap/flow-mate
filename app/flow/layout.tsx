import { FloatingDock } from "@/components/ui/floating-dock";
import { AppRoutes } from "@/config/routeConfig";
import React from "react"


const links = AppRoutes.map((route) => ({
  title: route.label,
  icon: (
    <route.icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: route.path,
}));

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </div>
  )
}
export default layout