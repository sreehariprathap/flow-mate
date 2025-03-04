import SideBar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      <SideBar />
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
};

export default layout;
