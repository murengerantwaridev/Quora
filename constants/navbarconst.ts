import type { NavBarPath } from "@/types";
import {
  House,
  Heart,
  MessageCircle,
  Compass,
  Settings,
  UserRound,
} from "lucide-react";
export const NavBarPaths: NavBarPath[] = [
  {
    text: "Home",
    path: "/",
    icon: House,
  },
  {
    text: "Liked",
    path: "/liked",
    icon: Heart,
  },
  {
    text: "Chat",
    path: "/chat",
    icon: MessageCircle,
  },
  {
    text: "Explore",
    path: "/explore",
    icon: Compass,
  },
  {
    text: "User",
    path: "/user",
    icon: UserRound,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
