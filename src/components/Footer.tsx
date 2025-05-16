
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Varshraj Singh</h3>
              <p className="mt-2 text-blue-200">Software Developer | Full Stack Developer</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/VarshrajSingh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/VarshrajSingh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:varshrajsingh12@gmail.com" className="text-white hover:text-blue-200 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200">
              &copy; {new Date().getFullYear()} Varshraj Singh. All rights reserved.
            </p>
            
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a href="#about" className="text-sm text-blue-200 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-sm text-blue-200 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-blue-200 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-blue-200 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
