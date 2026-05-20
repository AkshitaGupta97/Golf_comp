
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="flex items-center gap-4 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20">
            <span className="text-lg font-black tracking-[0.32em]">G</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/90">Charity</p>
            <h1 className="text-xl font-black uppercase tracking-[0.2em] text-white">
              Golf_Charity
            </h1>
          </div>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/90 text-slate-100 shadow-lg shadow-slate-950/30 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ease-in-out ${menuOpen ? 'translate-y-1 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ease-in-out ${menuOpen ? 'opacity-0' : 'my-1'}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ease-in-out ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`}
          />
        </button>

        <nav className={`absolute inset-x-6 top-full mt-3 rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition-all duration-300 md:static md:top-auto md:flex md:w-auto md:items-center md:justify-end md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-amber-300 md:px-0 md:py-0" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#how-it-works" className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-amber-300 md:px-0 md:py-0" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#charities" className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-amber-300 md:px-0 md:py-0" onClick={() => setMenuOpen(false)}>
            Charities
          </a>
          <a href="#dashboard" className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-amber-300 md:px-0 md:py-0" onClick={() => setMenuOpen(false)}>
            Dashboard
          </a>
          <a href="#requirements" className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-amber-300 md:px-0 md:py-0" onClick={() => setMenuOpen(false)}>
            Requirements
          </a>
          <a
            href="#subscribe"
            className="block rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-200 shadow-inner shadow-amber-500/10 transition hover:bg-amber-400/15 md:px-4 md:py-2"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
