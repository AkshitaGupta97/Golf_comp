
import AdmissionForm from "../components/AdmissionForm";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <CourseCard />
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
