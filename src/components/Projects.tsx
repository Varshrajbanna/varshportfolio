
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      description: "Developed a real-time messaging app with authentication and user groups. Integrated Socket.io for instant communication and MongoDB for user data storage.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Banking System",
      description: "Created a secure banking application with deposit, withdrawals, and transaction tracking. Used Java and MySQL for data storage.",
      technologies: ["Java", "JSP", "Servlet", "MySQL"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Job Portal",
      description: "Developed a job portal for employers and job seekers to post and apply for jobs. Integrated MySQL for database management and PHP for backend functionality.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Food Delivery App",
      description: "Designed an interactive UI for a food ordering platform. Implemented a responsive design using Bootstrap and Tailwind CSS.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-portfolio-blue mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-portfolio-blue text-white p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-portfolio-blue rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-hover-blue"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
