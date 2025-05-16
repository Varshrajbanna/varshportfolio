
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-bg-light to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-blue mb-6 animate-fade-in">
            Varshraj Singh
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Developer | Full Stack Web Developer | AI/ML Enthusiast
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A motivated software developer in the AI/ML and full-stack web development industry, 
            with the distinct ability to build scalable applications and real-time systems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="bg-portfolio-blue hover:bg-portfolio-hover-blue text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            
            <Button 
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
