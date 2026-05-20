
const PrizeHighlight = () => {
  const poolRows = [
    ['5-number match', '40%', 'Jackpot rollover'],
    ['4-number match', '35%', 'No rollover'],
    ['3-number match', '25%', 'No rollover'],
  ]

  const adminItems = [
    'Manage users, subscriptions, and score edits',
    'Configure random or algorithmic draw logic',
    'Run simulations before publishing results',
    'Approve winner proof and update payout states',
    'Track users, prize pool, charity totals, and draw stats',
  ]

  const roles = [
    ['Public visitor', 'Explore charities, understand draw mechanics, and start subscription.'],
    ['Registered subscriber', 'Manage profile, scores, charity choice, winnings, and proof upload.'],
    ['Administrator', 'Control users, subscriptions, draws, charities, winners, reports, and analytics.'],
  ]

  const verificationSteps = [
    ['Winner selected', 'Verification applies to winners only after official draw results.'],
    ['Proof upload', 'Winner submits a screenshot of scores from the golf platform.'],
    ['Admin review', 'Submission is approved or rejected before payout completion.'],
    ['Payment state', 'Prize moves from pending to paid after review and payout.'],
  ]

  const requirements = [
    'Mobile-first responsive interface',
    'Optimised assets and fast performance',
    'Secure authentication with JWT or sessions',
    'HTTPS enforced for production',
    'Email notifications for updates, draw results, and winner alerts',
    'Multi-country expansion support',
    'Teams and corporate account extensibility',
    'Campaign module ready for future activation',
    'Codebase shaped for a future mobile app',
  ]

  const deliverables = [
    ['Live website', 'Fully deployed public URL on a new Vercel account.'],
    ['User panel', 'Signup, login, score entry, subscription, and dashboard functional.'],
    ['Admin panel', 'Users, draw system, charities, winner verification, and payouts functional.'],
    ['Database', 'Backend connected with a proper Supabase-style schema.'],
    ['Source code', 'Clean, structured, well-commented codebase with environment variables configured.'],
  ]

  const testing = [
    'User signup and login',
    'Monthly and yearly subscription flow',
    '5-score rolling score logic',
    'Draw simulation and prize calculations',
    'Charity selection and contribution calculation',
    'Winner verification and payout tracking',
    'User dashboard modules',
    'Admin panel usability',
    'Responsive mobile and desktop states',
    'Error handling and edge cases',
  ]

  return (
    <>
      <section id="dashboard" className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
            User dashboard
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Subscriber modules in one focused workspace.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white">Latest scores</h3>
              <span className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-bold text-teal-200">5 saved</span>
            </div>
            <div className="mt-5 space-y-3">
              {[42, 37, 34, 29, 25].map((score, index) => (
                <div key={score} className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3">
                  <span className="text-slate-300">Round {index + 1}</span>
                  <strong className="text-white">{score}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white">Selected charity</h3>
              <strong className="text-amber-300">18%</strong>
            </div>
            <p className="mt-4 text-2xl font-black text-white">Youth Golf Access</p>
            <p className="mt-3 leading-7 text-slate-300">
              Contribution percentage can be increased beyond the 10% minimum.
            </p>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-300 to-teal-300" />
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white">Winnings</h3>
              <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-bold text-amber-200">Pending</span>
            </div>
            <p className="mt-5 text-5xl font-black text-white">$460</p>
            <p className="mt-3 leading-7 text-slate-300">
              Winners upload score proof, then admins approve or reject the submission.
            </p>
          </article>
        </div>
      </section>

      <section id="draws" className="grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Prize pool logic
          </p>
          <h2 className="mt-3 text-4xl font-black text-white">Automatic tiers for every monthly draw.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A fixed subscription portion feeds the pool. Prizes split equally between winners
            in the same tier, and the 5-match jackpot carries forward if unclaimed.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]">
          <div className="grid grid-cols-3 bg-slate-950 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-400">
            <span>Match</span>
            <span>Share</span>
            <span>Rollover</span>
          </div>
          {poolRows.map(([type, share, rollover]) => (
            <div key={type} className="grid grid-cols-3 gap-3 border-t border-white/10 px-5 py-5 text-slate-300">
              <span>{type}</span>
              <strong className="text-white">{share}</strong>
              <span>{rollover}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-slate-950/40">
          <div className="flex gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-teal-300" />
          </div>
          <div className="space-y-3 pt-5">
            {adminItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.06] p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
            Admin dashboard
          </p>
          <h2 className="mt-3 text-4xl font-black text-white">Full control for operations.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Admins manage users, subscriptions, draw systems, charity listings, winner verification,
            payout states, reports, analytics, and content media.
          </p>
        </div>
      </section>

      <section id="requirements" className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Remaining PRD coverage
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Extra screens and states needed for a complete build.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            These blocks capture the PDF details that are not obvious from the landing page alone.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {roles.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Role</p>
              <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
            Winner verification
          </p>
          <h2 className="mt-3 text-4xl font-black text-white">Proof, review, payout.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            The PRD requires a winner-only verification workflow with proof upload, admin review,
            and clear pending-to-paid payment states.
          </p>
        </div>

        <div className="grid gap-4">
          {verificationSteps.map(([title, text], index) => (
            <article
              key={title}
              className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:grid-cols-[4rem_1fr]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300 text-lg font-black text-slate-950">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-14 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Technical and scaling
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">Build constraints to keep in view.</h2>
          <div className="mt-6 grid gap-3">
            {requirements.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-950/70 p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
            Testing checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">Acceptance checks from the PDF.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {testing.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-950/70 p-4 text-sm font-semibold text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/15 to-teal-300/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Mandatory deliverables
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {deliverables.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PrizeHighlight
