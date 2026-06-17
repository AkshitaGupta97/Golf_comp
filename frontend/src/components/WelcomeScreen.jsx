import { motion } from "framer-motion";
import welcomeBackground from "../assets/welcome-bg.svg";

const WelcomeScreen = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--surface)] text-[var(--text)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${welcomeBackground})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(var(--surface-rgb),0.7)] via-[rgba(var(--surface-rgb),0.8)] to-[rgba(var(--surface-rgb),0.95)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-[rgba(var(--accent-rgb),0.30)] bg-[rgba(var(--accent-rgb),0.08)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Welcome to Yatharth Group of Institution
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
          >
            Building slikks. Building careers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
          >
            A modern institution crafted for ambitious learners, blending smart campus design, expert mentoring, and future-ready programs.
          </motion.p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--surface)] shadow-lg shadow-[rgba(var(--accent-rgb),0.25)] transition"
              href="#courses"
            >
              Explore Courses
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--text-rgb),0.2)] bg-[rgba(var(--text-rgb),0.05)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition"
              href="#admissions"
            >
              Start Admissions
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Programs</p>
            <p className="mt-4 text-3xl font-semibold text-[var(--text)]">50+</p>
          </div>
          <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Expert Mentors</p>
            <p className="mt-4 text-3xl font-semibold text-[var(--text)]">24/7</p>
          </div>
          <div className="rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[rgba(var(--text-rgb),0.05)] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Career Focus</p>
            <p className="mt-4 text-3xl font-semibold text-[var(--text)]">Future-ready</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
