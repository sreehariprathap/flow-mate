import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { AppRoutes } from "@/config/routeConfig";
import SimpleAppHeader from "@/components/simpleAppHeader";

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

      <div className="flex-1 w-full p-3">
        <SimpleAppHeader title="Flow" subtitle="manage your workflows" />
        {children}</div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </div>
  );
};

export default layout;
