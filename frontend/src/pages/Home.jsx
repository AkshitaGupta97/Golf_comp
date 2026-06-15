
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <CourseCard />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
