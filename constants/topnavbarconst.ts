import type { NavBarPath } from "@/types";
import { Home, Popcorn, Save, Tv } from "lucide-react";
export const TopBarPaths: NavBarPath[] = [
  {
    text: "Home",
    path: "/",
    icon: Home,
  },
  {
    text: "shows",
    path: "/movies/categories",
    icon: Tv,
  },
  {
    text: "My List",
    path: "/movies/low",
    icon: Save,
  },
];
