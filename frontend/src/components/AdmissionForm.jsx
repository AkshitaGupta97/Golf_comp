import { useState } from "react";

const AdmissionForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Paramedical",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Paramedical",
    "Fire & Safety",
    "Computer Vocational",
    "Language Courses",
    "School Programs",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{10,15}$/.test(values.phone.replace(/\s+/g, ""))) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (!values.city.trim()) nextErrors.city = "City is required.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  };

  return (
    <section id="admissions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="mb-3 inline-flex rounded-full border border-[rgba(var(--accent-rgb),0.30)] bg-[rgba(var(--accent-rgb),0.08)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Admissions
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Start your application today
        </h2>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_40px_120px_rgba(15,23,42,0.35)] sm:p-8"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[var(--text)]">
              Full Name
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] placeholder-muted focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.20)]"
                required
              />
              {errors.name && <span className="text-sm text-rose-400">{errors.name}</span>}
            </label>

            <label className="grid gap-2 text-sm text-[var(--text)]">
              Email Address
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="example@mail.com"
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] placeholder-muted focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.20)]"
                required
              />
              {errors.email && <span className="text-sm text-rose-400">{errors.email}</span>}
            </label>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[var(--text)]">
              Phone Number
              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+91 98765 43210"
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] placeholder-muted focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.20)]"
                required
              />
              {errors.phone && <span className="text-sm text-rose-400">{errors.phone}</span>}
            </label>

            <label className="grid gap-2 text-sm text-[var(--text)]">
              City
              <input
                name="city"
                value={values.city}
                onChange={handleChange}
                type="text"
                placeholder="City name"
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] placeholder-muted focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.20)]"
                required
              />
              {errors.city && <span className="text-sm text-rose-400">{errors.city}</span>}
            </label>
          </div>

          <label className="mt-6 grid gap-2 text-sm text-[var(--text)]">
            Course Selection
            <select
              name="course"
              value={values.course}
              onChange={handleChange}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.20)]"
            >
              {courses.map((courseOption) => (
                <option key={courseOption} value={courseOption} className="bg-[var(--surface-strong)] text-[var(--text)]">
                  {courseOption}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--surface)] transition hover:bg-[var(--accent-strong)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.30)]"
          >
            Submit Application
          </button>

          {submitted && (
            <div className="mt-6 rounded-3xl border border-[rgba(var(--accent-rgb),0.20)] bg-[rgba(var(--accent-rgb),0.12)] px-5 py-4 text-sm text-[var(--accent)]">
              Your application details are ready. Our admissions team will contact you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
