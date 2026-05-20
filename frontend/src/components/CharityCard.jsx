
const CharityCard = () => {
  const objectives = [
    ['Subscription engine', 'Monthly and yearly plans with renewals, cancellations, and lapsed states.'],
    ['Score experience', 'Stableford score entry from 1 to 45 with dates and rolling latest-five logic.'],
    ['Custom draw engine', 'Monthly random or algorithmic draws with simulation before publishing.'],
    ['Charity integration', 'Charity selection, minimum 10% contribution, and independent donations.'],
    ['Admin control', 'User, score, charity, draw, winner, payout, and analytics management.'],
    ['Outstanding UI/UX', 'Emotion-led design that avoids traditional golf website clichés.'],
  ]

  const charities = [
    ['Youth Golf Access', 'Funding coaching, equipment, and entry support for young players.'],
    ['Community Health Days', 'Local fundraising events with visible progress and stories.'],
    ['Green Recovery Fund', 'Environmental recovery projects supported by recurring giving.'],
  ]

  return (
    <>
      <section id="how-it-works" className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
            Core objectives
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Built around action, reward, and impact.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            The PRD asks for a platform that feels modern and emotionally engaging, with charity
            impact leading the product story.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {objectives.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.08]"
            >
              <span className="text-sm font-black text-amber-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="charities" className="grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
            Charity directory
          </p>
          <h2 className="mt-3 text-4xl font-black text-white">Every subscription has a visible cause.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Users select a charity during signup, can increase their contribution percentage, and
            can explore charity profiles with descriptions, images, and upcoming events.
          </p>
        </div>

        <div className="grid gap-4">
          {charities.map(([title, text]) => (
            <article
              key={title}
              className="flex gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5"
            >
              <div className="mt-1 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 to-teal-300" />
              <div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default CharityCard
