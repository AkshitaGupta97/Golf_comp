
import heroImage from '../assets/hero.png'

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.16),transparent_28%)]" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Golf Charity Subscription Platform
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Play for prizes. Give every round a purpose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A modern subscription platform where golfers add their latest Stableford scores,
            enter monthly prize draws, and support a charity of their choice with every plan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Start subscription
            </a>
            <a
              href="#draws"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-300/50 hover:bg-teal-300/10"
            >
              See draw logic
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ['10%+', 'charity share'],
              ['5', 'latest scores'],
              ['40%', 'jackpot tier'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt=""
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full object-cover opacity-20 blur-sm"
          />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-emerald-950/70 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">April draw simulation</p>
                  <h2 className="mt-1 text-2xl font-black text-white">$24,800 pool</h2>
                </div>
                <span className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-bold text-teal-200">
                  Active
                </span>
              </div>

              <div className="mt-6 grid grid-cols-5 gap-2">
                {[38, 31, 27, 41, 35].map((score) => (
                  <span
                    key={score}
                    className="grid aspect-square place-items-center rounded-2xl bg-white text-lg font-black text-slate-950"
                  >
                    {score}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-slate-400">Charity impact</p>
                  <p className="mt-1 text-xl font-black text-amber-200">$8,140</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-slate-400">Next draw</p>
                  <p className="mt-1 text-xl font-black text-white">Monthly</p>
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-300 to-teal-300" />
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Admins can run simulations, publish results, verify winners, and roll over the
                5-number jackpot when there is no winner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
