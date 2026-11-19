import type { NavBarPath } from "@/types";
import { House,Heart,MessageCircle,Compass } from "lucide-react";
const NavBarPaths: NavBarPath[] = [{
  text: "Home",
  path: "/",
  icon: House
}, {
  text: "Liked",
  path: "/liked",
  icon:Heart
  }, {
  text: "Chat",
  path: "/chat",
  icon:MessageCircle
  }, {
  text: "Explore",
  path: "/explore",
  icon:Compass
}]
