'use client'
import { AppRoutes } from "@/config/routeConfig";
import Link from "next/link";
import React from "react";
import "./sidebar.css";
import { LogOut } from "lucide-react";
import {
  useClerk 
} from '@clerk/nextjs'

const routes = AppRoutes;

const SideBar = () => {
  const { signOut } = useClerk()

  return (
    <div className="flex gap-2 flex-col p-5 w-36 bg-slate-100 h-full items-center">
      <div className="h-28">
        <img src="/app-logo.png" />
      </div>
      <div className="flex flex-col gap-5">
        {routes.map((route) => (
          <Link href={route.path} key={route.path}>
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-lg shadow-md flex flex-col items-center justify-center p-2 bg-white transition-all duration-200 hover:scale-110 hover:bg-blue-50 group icon-container icon-pulse">
                <route.icon
                  size={32}
                  className="text-gray-600 transition-colors duration-200 group-hover:text-primary"
                />
                <span className="text-xs mt-1 text-gray-700 group-hover:text-primary transition-colors duration-200">
                  {route.label}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={() => signOut({ redirectUrl: '/' })} className="w-14 mt-10 h-14 rounded-lg shadow-md flex flex-col items-center justify-center p-2 bg-white transition-all duration-200 hover:scale-110 hover:bg-blue-50 group icon-container icon-pulse-logout">
        <LogOut
          size={32}
          className="text-gray-600 transition-colors duration-200 group-hover:text-destructive"
        />
        <span className="text-xs mt-1 text-gray-700 group-hover:text-destructive transition-colors duration-200">
          Logout
        </span>
      </button>
    </div>
  );
};

export default SideBar;
