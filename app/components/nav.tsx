import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
    external: false,
  },
  "/values": {
    name: "values",
    external: false,
  },
  "/portfolio": {
    name: "portfolio",
    external: false,
  },
  "/inspiration": {
    name: "inspiration",
    external: false,
  },
  "/blog": {
    name: "thoughts",
    external: false,
  },
  "https://open.spotify.com/artist/3K49G6Qf78adI7KG77Wr5i?si=64l-2L5YT9aD3G6OIIIRUg":
    {
      name: "music",
      external: true,
    },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              return external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
