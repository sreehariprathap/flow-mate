import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AppRoutes } from "@/config/routeConfig";
import SimpleAppHeader from "@/components/simpleAppHeader";
import { title } from "process";

const links = AppRoutes.map((route) => ({
  title: route.label,
  icon: (
    <route.icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: route.path,
}));


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">

      <div className="flex-1 w-full p-3 flex flex-col gap-4">
        <SimpleAppHeader 
          title="Flows" 
          subtitle="manage your workflows" 
          pageAction={{ type: "CREATE-FLOW" }} 
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
