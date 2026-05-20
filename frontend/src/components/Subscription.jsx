
const Subscription = () => {
  const rows = [
    ['Plans', 'Monthly and discounted yearly subscription options'],
    ['Gateway', 'Stripe or equivalent PCI-compliant payment provider'],
    ['Access control', 'Restricted feature access for non-subscribers'],
    ['Lifecycle', 'Renewal, cancellation, and lapsed-subscription handling'],
    ['Validation', 'Real-time subscription check on authenticated requests'],
  ]

  return (
    <section id="subscribe" className="grid gap-6 py-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-amber-300/25 bg-amber-300 p-6 text-slate-950 shadow-2xl shadow-amber-500/20">
        <p className="text-sm font-black uppercase tracking-[0.28em]">Subscription</p>
        <h2 className="mt-3 text-4xl font-black">Simple plans. Clear impact.</h2>
        <p className="mt-4 leading-7 text-slate-800">
          The signup flow asks users to choose a plan, pick a charity, set contribution percentage,
          then activate the score and draw experience.
        </p>

        <div className="mt-6 inline-flex rounded-full bg-slate-950/10 p-1">
          <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">Monthly</span>
          <span className="px-4 py-2 text-sm font-bold text-slate-800">Yearly discount</span>
        </div>

        <div className="mt-8 flex items-end gap-2">
          <strong className="text-6xl font-black">$19</strong>
          <span className="pb-2 text-lg font-bold">/ month</span>
        </div>

        <a
          href="#dashboard"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
        >
          Preview dashboard
        </a>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
        <div className="divide-y divide-white/10">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-2 py-5 sm:grid-cols-[0.35fr_0.65fr]">
              <strong className="text-white">{label}</strong>
              <span className="text-slate-300">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Subscription
