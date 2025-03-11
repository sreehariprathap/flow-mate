import { AudioWaveform, Home, Settings, User } from "lucide-react";
import { Label } from "recharts";

export const AppRoutes = [
  {
    path: "/",
    icon: Home,
    label: "Home",
  },
  {
    path: "flows",
    icon: AudioWaveform,
    label: "Flows",
  },
  {
    path: "profile",
    icon: User,
    label: "Profile",
  },
  {
    path: "settings",
    icon: Settings,
    label: "Settings",
  },
];
