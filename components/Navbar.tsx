"use client";

import { Libre_Baskerville } from "next/font/google";
import { TopBarPaths } from "@/constants/topnavbarconst";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, X, Film, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LibreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const HIDDEN_NAVBAR_PATHS = ["/explore"];

const SAMPLE_MOVIES = [
  {
    id: "1",
    title: "Dune: Part Two",
    year: "2024",
    rating: "8.6",
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "Oppenheimer",
    year: "2023",
    rating: "8.4",
    genre: "Drama",
  },
  {
    id: "3",
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    genre: "Sci-Fi",
  },
  {
    id: "4",
    title: "The Batman",
    year: "2022",
    rating: "7.8",
    genre: "Action",
  },
  {
    id: "5",
    title: "Blade Runner 2049",
    year: "2017",
    rating: "8.0",
    genre: "Sci-Fi",
  },
  {
    id: "6",
    title: "Inception",
    year: "2010",
    rating: "8.8",
    genre: "Thriller",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const shouldHideNavbar = HIDDEN_NAVBAR_PATHS.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setQuery("");
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  if (shouldHideNavbar) {
    return null;
  }

  const filteredMovies = query.trim()
    ? SAMPLE_MOVIES.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.genre.toLowerCase().includes(query.toLowerCase()),
      )
    : SAMPLE_MOVIES.slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
  };

  const closeSearch = () => {
    setQuery("");
    setSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full pointer-events-none">
      <nav className="flex items-start justify-between px-6 sm:px-12 py-6">
        <Link
          href="/"
          className="pointer-events-auto pt-1 transition-transform duration-200 hover:scale-105"
        >
          <h1
            className={`${LibreBaskerville.className} text-3xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.65)]`}
          >
            Quora
          </h1>
        </Link>

        <div className="relative pointer-events-auto flex flex-col items-end">
          <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-neutral-950/55 p-2 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_12px_rgba(0,0,0,0.65)] transition-all duration-300">
            {!searchOpen ? (
              <>
                {TopBarPaths.map((navPath) => {
                  const isActive =
                    navPath.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(navPath.path);

                  return (
                    <Link
                      key={navPath.path}
                      href={navPath.path}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                        isActive
                          ? "border border-white/15 bg-white text-black shadow-sm"
                          : "border border-transparent text-white/75 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      {isActive && <navPath.icon size={17} strokeWidth={2} />}
                      <span>{navPath.text}</span>
                    </Link>
                  );
                })}

                <div className="mx-1 h-5 w-px bg-white/15" />

                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="rounded-full border border-transparent p-2.5 text-white/75 transition-all duration-200 hover:bg-white/15 hover:text-white hover:scale-105 cursor-pointer"
                >
                  <Search size={18} strokeWidth={1.75} />
                </button>

              
              </>
            ) : (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 pl-3 pr-1"
              >
                <Search
                  size={17}
                  strokeWidth={1.75}
                  className="text-white/50 shrink-0"
                />
                <input
                  ref={inputRef}
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onBlur={() => {
                    if (!query.trim()) setSearchOpen(false);
                  }}
                  placeholder="Search movies..."
                  className="w-60 sm:w-80 bg-transparent py-1.5 text-sm text-white placeholder-white/40 outline-none"
                />
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    closeSearch();
                  }}
                  aria-label="Close search"
                  className="rounded-full p-2 text-white/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

          {searchOpen && (
            <div className="mt-2.5 w-full min-w-[300px] sm:min-w-[380px] overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/75 p-2 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_12px_24px_rgba(0,0,0,0.75)]">
              {filteredMovies.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {filteredMovies.map((movie) => (
                    <Link
                      key={movie.id}
                      href={`/movies/${movie.id}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm transition-all duration-150 hover:bg-white/15"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75">
                          <Film size={16} strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            {movie.title}
                          </p>
                          <p className="text-xs text-white/50">
                            {movie.year} • {movie.genre}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-amber-400">
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                        <span>{movie.rating}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-6 text-center text-sm text-white/50">
                  No movies found for {'" '}
                  {query}
                  {' "'}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
