import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsWorld from "@/components/SkillsWorld";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <SkillsWorld />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
