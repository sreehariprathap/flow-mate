
import SimpleAppHeader from "@/components/simpleAppHeader";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AppRoutes } from "@/config/routeConfig";
import React from "react";

const links = AppRoutes.map((route) => ({
  title: route.label,
  icon: (
    <route.icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: route.path,
}));

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex-1 w-full p-3 flex flex-col gap-4">
        <SimpleAppHeader 
          isLanding
        />
        {children}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </div>
  );
};

export default layout;
