"use client";

import { NavBarPaths } from "@/constants/navbarconst";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftNavbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-4 top-0 h-screen flex items-center justify-center z-50 pointer-events-none">
      <nav className="pointer-events-auto flex flex-col items-center gap-2 rounded-full border border-white/15 bg-neutral-950/55 p-2 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_12px_rgba(0,0,0,0.65)]">
        {NavBarPaths.map((navPath) => {
          const isActive =
            navPath.path === "/"
              ? pathname === "/"
              : pathname.startsWith(navPath.path);

          return (
            <Link
              key={navPath.path}
              href={navPath.path}
              aria-label={navPath.text}
              className={`group relative flex items-center justify-center rounded-full p-2.5 transition-all duration-200 cursor-pointer hover:scale-105 ${
                isActive
                  ? "border border-white/15 bg-white/15 text-white shadow-sm"
                  : "border border-transparent text-white/75 hover:bg-white/15 hover:text-white"
              }`}
            >
              <navPath.icon size={20} strokeWidth={1.75} />

              {navPath.text && (
                <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1 text-xs font-medium text-white/90 opacity-0 backdrop-blur-xl transition-all duration-200 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  {navPath.text}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
