import { NavBarPaths } from "@/constants/navbarconst";

export default function LeftNavbar() {
  return (
    <aside className="fixed left-4 top-0 h-screen flex items-center justify-center z-50">
      <div className="flex flex-col gap-3 bg-neutral-950/55 px-2.5 py-3 rounded-full border border-white/15 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.65)]">
        {NavBarPaths.map((path) => {
          return (
            <div
              key={path.path}
              className="p-2.5 rounded-full text-white/75 transition-all duration-200 hover:cursor-pointer hover:bg-white/15 hover:text-white hover:scale-105"
            >
              <path.icon size={28} strokeWidth={1.75} />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
