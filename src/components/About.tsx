
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-portfolio-blue mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Varshraj Singh</h3>
                <p className="text-gray-600 mt-1">Software Developer | Full Stack Developer</p>
                
                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:varshrajsingh12@gmail.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                
                <div className="flex justify-center items-center gap-2 mt-4 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Gram Sharpur, District Ratlam, Madhya Pradesh, 457331</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-medium text-portfolio-blue mb-2">Objective</h4>
                <p className="text-gray-700">
                  A motivated software developer in the AI/ML and full-stack web development industry, with the distinct 
                  ability to build scalable applications and real-time systems. Eager to impart hands-on proficiency and 
                  a problem-solving mindset into innovative projects.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-portfolio-blue mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-medium">Email</h5>
                    <a href="mailto:varshrajsingh12@gmail.com" className="text-portfolio-blue hover:underline">
                      varshrajsingh12@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-portfolio-blue mr-4">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-medium">GitHub</h5>
                    <a href="https://github.com/VarshrajSingh" className="text-portfolio-blue hover:underline" target="_blank" rel="noopener noreferrer">
                      github.com/VarshrajSingh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-portfolio-blue mr-4">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-medium">LinkedIn</h5>
                    <a href="https://linkedin.com/in/VarshrajSingh" className="text-portfolio-blue hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/VarshrajSingh
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
