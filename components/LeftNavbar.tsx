"use client";
import { NavBarPaths } from "@/constants/navbarconst";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftNavbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-4 top-0 h-screen flex items-center justify-center z-50 ">
      <div className="flex flex-col gap-3 bg-neutral-950/55 px-2 py-2 rounded-full border border-white/15 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_12px_rgba(0,0,0,0.65)]">
        {NavBarPaths.map((navPath) => {
          return (
            <Link
              key={navPath.path}
              href={navPath.path}
              className={`p-2.5 rounded-full  transition-all duration-200 ${navPath.path == pathname ? "bg-white/15 text-white" : "text-white/75"} hover:cursor-pointer hover:bg-white/15 hover:text-white hover:scale-105`}
            >
              <navPath.icon size={25} strokeWidth={1.75} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
