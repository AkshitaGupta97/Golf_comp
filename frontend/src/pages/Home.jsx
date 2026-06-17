
import AdmissionForm from "../components/AdmissionForm";
import CampusTour from "../components/CampusTour";
import Contact from "../components/Contact";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mouse from "../components/Mouse";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-500">
      <Navbar />
      <Mouse />
      <main>
        <Hero />
        <CourseCard />
        <AdmissionForm />
        <CampusTour />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
