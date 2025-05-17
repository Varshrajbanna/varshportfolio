import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Background Scene */}
      {/* <div className="fixed inset-0 z-0">
        <Scene />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
