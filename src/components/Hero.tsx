import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white">
              Varshraj Singh
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              Software Developer | Full Stack Web Developer | AI/ML Enthusiast
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-400">
              A motivated software developer passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            
            <Button 
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
