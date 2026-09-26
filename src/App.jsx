import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Internship from "./components/Internship.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Research from "./components/Research.jsx";
import Reference from "./components/Reference.jsx";
import Contact from "./components/Contact.jsx";
import Declaration from "./components/Declaration.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Internship />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Research />
        <Reference />
        <Contact />
        <Declaration />
      </main>
      <Footer />
    </div>
  );
}