import type { NavBarPath } from "@/types";
import { Home, Save, Tv } from "lucide-react";

export const TopBarPaths: NavBarPath[] = [
  {
    text: "Home",
    path: "/",
    icon: Home,
  },
  {
    text: "Shows",
    path: "/movies/categories",
    icon: Tv,
  },
  {
    text: "My List",
    path: "/movies/low",
    icon: Save,
  },
];