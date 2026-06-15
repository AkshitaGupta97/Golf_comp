
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-slate-950/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center font-bold justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/20">
            Y
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Yatharth Institution</p>
            <p className="text-sm text-slate-400">Inspiring academic excellence</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#courses" className="transition hover:text-white">Courses</a>
          <a href="#admissions" className="transition hover:text-white">Admissions</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#admissions"
            className="rounded-full border border-cyan-500 bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Apply Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 md:hidden"
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
        <div className="border-t border-slate-800 bg-slate-950/98 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/70">Home</a>
            <a href="#about" className="rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/70">About</a>
            <a href="#courses" className="rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/70">Courses</a>
            <a href="#admissions" className="rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/70">Admissions</a>
            <a href="#contact" className="rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/70">Contact</a>
            <a
              href="#admissions"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
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
