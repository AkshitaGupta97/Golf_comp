
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_56%)] opacity-80" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-[rgba(var(--accent-rgb),0.30)] bg-[rgba(var(--accent-rgb),0.08)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Yatharth Group of Institution
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            A future-ready campus for students who want to build careers with confidence.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:text-xl">
            Learn from expert faculty, unlock modern programs, and experience a supportive environment designed to launch your success.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--surface)] shadow-lg shadow-[rgba(var(--accent-rgb),0.20)] transition hover:bg-[var(--accent-strong)]"
            >
              Apply Now
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(var(--text-rgb),0.06)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              View Programs
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Programs</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--text)]">50+</p>
            </div>
            <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Mentors</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--text)]">100+</p>
            </div>
            <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Placement</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--text)]">Career-first</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="rounded-4xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-6 shadow-2xl shadow-[rgba(15,23,42,0.30)] backdrop-blur-xl sm:p-8"
        >
          <div className="rounded-[1.75rem] bg-[var(--surface-strong)] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[rgba(var(--accent-rgb),0.10)] text-[var(--accent)] ring-1 ring-[rgba(var(--accent-rgb),0.20)]">
                Y
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Yatharth</p>
                <p className="text-base font-semibold text-[var(--text)]">Building slikks</p>
              </div>
            </div>
            <div className="space-y-4 text-[var(--muted)]">
              <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[var(--surface)] p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Modern classrooms</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Smart learning spaces with blended technology.</p>
              </div>
              <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[var(--surface)] p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Career coaching</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Personal guidance for every step to placement.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
