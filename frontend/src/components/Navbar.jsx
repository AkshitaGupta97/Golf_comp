
import { useEffect, useState } from "react";

const themeOptions = [
  { value: "light", label: "Light", emoji: "☀️" },
  { value: "dark", label: "Dark", emoji: "🌙" },
  { value: "cyber", label: "Cyber", emoji: "🟣" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 bg-(--surface)/95 backdrop-blur-xl border-b border-(--border) shadow-lg shadow-(--surface)/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center font-bold justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/20">
            Y
          </div>
          <div>
            <p className="text-lg font-semibold text-(--text)">Yatharth Institution</p>
            <p className="text-sm text-(--muted)">Inspiring academic excellence</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-(--text) md:flex">
          <a href="#home" className="transition hover:text-(--accent)">Home</a>
          <a href="#courses" className="transition hover:text-(--accent)">Courses</a>
          <a href="#admissions" className="transition hover:text-(--accent)">Admissions</a>
          <a href="#contact" className="transition hover:text-(--accent)">Contact</a>
        </nav>

        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <div className="flex flex-wrap gap-2 rounded-full border border-(--border) bg-(--surface-strong) px-2 py-1 text-xs text-(--text)">
            <span className="hidden items-center gap-2 rounded-full bg-(--surface) px-3 py-2 text-(--muted) md:inline-flex">
              Theme
            </span>
            {themeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTheme(option.value)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.35)] ${
                  theme === option.value
                    ? "border-(--accent) bg-(--accent) text-(--surface)"
                    : "border-transparent bg-(--surface) text-(--text) hover:bg-(--surface-strong)"
                }`}
              >
                <span>{option.emoji}</span>
                <span className="hidden sm:inline">{option.label}</span>
              </button>
            ))}
          </div>

          <a
            href="#admissions"
            className="rounded-full border border-(--accent) bg-(--accent) px-5 py-2 text-sm font-semibold text-(--surface) transition hover:bg-(--accent-strong)"
          >
            Apply Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-strong) text-(--text) transition hover:border-(--accent) hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.35)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-(--border) bg-(--surface) md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="rounded-2xl px-4 py-3 text-sm text-(--text) transition hover:bg-(--surface-strong)">Home</a>
            <a href="#courses" className="rounded-2xl px-4 py-3 text-sm text-(--text) transition hover:bg-(--surface-strong)">Courses</a>
            <a href="#admissions" className="rounded-2xl px-4 py-3 text-sm text-(--text) transition hover:bg-(--surface-strong)">Admissions</a>
            <a href="#contact" className="rounded-2xl px-4 py-3 text-sm text-(--text) transition hover:bg-(--surface-strong)">Contact</a>

            <div className="rounded-3xl border border-(--border) bg-(--surface-strong) p-3 text-(--text)">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-(--muted)">Theme</p>
              <div className="flex flex-wrap gap-2">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTheme(option.value)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.35)] ${
                      theme === option.value
                        ? "border-(--accent) bg-(--accent) text-(--surface)"
                        : "border-transparent bg-(--surface) text-(--text) hover:bg-(--surface-strong)"
                    }`}
                  >
                    <span>{option.emoji}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#admissions"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-(--surface) transition hover:bg-(--accent-strong)"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

