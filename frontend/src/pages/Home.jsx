
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section id="home" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Yatharth Institution
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Build your future with trusted academic excellence
            </h1>
            <p className="mt-6 max-w-xl text-slate-400 leading-8">
              Yatharth Institution offers expertly designed courses, supportive mentorship, and a modern campus experience tailored for ambitious learners.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
