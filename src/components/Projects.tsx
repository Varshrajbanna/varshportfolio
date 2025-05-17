import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      description: "Developed a real-time messaging app with authentication and user groups. Integrated Socket.io for instant communication and MongoDB for user data storage.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/Varshrajbanna/nodejs-reactjs-chat.git",
      demo: "#",
    },
    {
      title: "Banking System",
      description: "Created a secure banking application with deposit, withdrawals, and transaction tracking. Used Java and MySQL for data storage.",
      technologies: ["Java", "JSP", "Servlet", "MySQL"],
      github: "https://github.com/Varshrajbanna/bank.git",
      demo: "#",
    },
    {
      title: "Job Portal",
      description: "Developed a job portal for employers and job seekers to post and apply for jobs. Integrated MySQL for database management and PHP for backend functionality.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Varshrajbanna/internshala.git",
      demo: "#",
    },
    {
      title: "Food Delivery App",
      description: "Designed an interactive UI for a food ordering platform. Implemented a responsive design using Bootstrap and Tailwind CSS.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Varshrajbanna/foodproj.github.io.git",
      demo: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in different technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 group">
                <CardHeader className="bg-blue-800/50 text-white p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-400 text-sm font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
