import { motion } from "framer-motion";
import welcomeBackground from "../assets/welcome-bg.svg";

const WelcomeScreen = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${welcomeBackground})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/80 to-slate-950/95" />
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Welcome to Yatharth Group of Institution
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building slikks. Building careers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            A modern institution crafted for ambitious learners, blending smart campus design, expert mentoring, and future-ready programs.
          </motion.p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition"
              href="#courses"
            >
              Explore Courses
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition"
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
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Programs</p>
            <p className="mt-4 text-3xl font-semibold text-white">50+</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Expert Mentors</p>
            <p className="mt-4 text-3xl font-semibold text-white">24/7</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Career Focus</p>
            <p className="mt-4 text-3xl font-semibold text-white">Future-ready</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
