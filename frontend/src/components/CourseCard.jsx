

const courses = [
  {
    title: "Paramedical",
    description: "Hands-on allied health training with certification-ready curriculum and practical lab experiences.",
  },
  {
    title: "Fire & Safety",
    description: "Safety management, emergency response, and prevention techniques built for modern workplaces.",
  },
  {
    title: "Computer Vocational",
    description: "Industry-focused IT and digital skills training for high-demand technical careers.",
  },
  {
    title: "Language Courses",
    description: "Communication and language fluency programs designed for academic and professional success.",
  },
  {
    title: "School Programs",
    description: "Structured learning paths for school students with strong career foundations and mentoring.",
  },
];

const CourseCard = () => {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="mb-3 inline-flex rounded-full border border-[rgba(var(--accent-rgb),0.30)] bg-[rgba(var(--accent-rgb),0.08)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Courses
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Programs built to launch careers.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)] sm:text-lg">
          Explore our high-impact learning paths with immersive support, modern labs, and industry-aligned outcomes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" style={{ perspective: 1400 }}>
        {courses.map((course) => (
          <div
            key={course.title}
            className="group relative overflow-hidden rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_40px_100px_rgba(15,23,42,0.35)] transition duration-500 ease-out transform-gpu md:hover:-translate-y-2 md:hover:scale-105 md:hover:shadow-[0_45px_120px_rgba(34,211,238,0.16)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-[rgba(var(--surface-rgb),0)] opacity-20 transition duration-500 md:opacity-0 md:group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">Top program</p>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">{course.title}</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--surface-strong)] text-[var(--accent)] shadow-lg shadow-[rgba(var(--accent-rgb),0.10)]">
                  {course.title.charAt(0)}
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-[rgba(var(--text-rgb),0.12)] bg-[var(--surface-strong)] p-5 text-[var(--muted)] transition duration-500 group-hover:shadow-[0_0_0_2px_rgba(34,211,238,0.12)]">
                <p className="text-sm leading-7 text-[var(--text)]">{course.description}</p>
                <div className="mt-4 max-h-fit opacity-100 transition duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
                  <p className="text-sm text-[var(--accent)]">What you get:</p>
                  <ul className="mt-3 space-y-2 text-[var(--muted)]">
                    <li>• Practical live sessions</li>
                    <li>• Certified instructors</li>
                    <li>• Career-focused projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCard;
