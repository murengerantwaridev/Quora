"use client";

import { Libre_Baskerville } from "next/font/google";
import { TopBarPaths } from "@/constants/topnavbarconst";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";
import { useState } from "react";

const LibreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 z-50 w-full pointer-events-none">
      <nav className="flex items-center justify-between px-12 py-6">
        <Link
          href="/"
          className="pointer-events-auto transition-transform duration-200 hover:scale-105"
        >
          <h1
            className={`${LibreBaskerville.className} text-3xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.65)]`}
          >
            Quora
          </h1>
        </Link>

        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/15 bg-neutral-950/55 p-2 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_12px_rgba(0,0,0,0.65)]">
          {TopBarPaths.map((navPath) => {
            const isActive =
              navPath.path === "/"
                ? pathname === "/"
                : pathname.startsWith(navPath.path);

            return (
              <Link
                key={navPath.path}
                href={navPath.path}
                className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                  isActive
                    ? "border border-white/15 bg-white/15 text-white shadow-sm"
                    : "border border-transparent text-white/75 hover:bg-white/15 hover:text-white"
                }`}
              >
                {isActive ? (
                  <navPath.icon size={18} strokeWidth={1.75} />
                ) : null}
                <span className="hidden sm:inline">{navPath.text}</span>
              </Link>
            );
          })}

          <div className="mx-1 h-5 w-px bg-white/15" />

          <div className="flex items-center">
            {searchOpen ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex items-center"
              >
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onBlur={() => {
                    if (!query) setSearchOpen(false);
                  }}
                  placeholder="Search..."
                  className="w-40 sm:w-52 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white/30"
                />
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="rounded-full border border-transparent p-2.5 text-white/75 transition-all duration-200 hover:bg-white/15 hover:text-white hover:scale-105 cursor-pointer"
              >
                <Search size={18} strokeWidth={1.75} />
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
