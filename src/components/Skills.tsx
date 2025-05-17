import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, GitBranch, Image, Brain, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "C", "C++", "JavaScript", "PHP", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS", "PHP"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "SQL"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"]
    },
    {
      title: "Machine Learning and AI",
      icon: <Brain className="h-6 w-6" />,
      skills: ["TensorFlow", "Keras", "SVM", "Deep Learning"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Google Cloud", "BigQuery", "Compute Engine"]
    },
    {
      title: "Design Tools",
      icon: <Image className="h-6 w-6" />,
      skills: ["Adobe Photoshop", "Adobe Illustrator"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-md bg-blue-700 text-white mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Problem-Solving</h3>
          <Card className="border-none shadow-md bg-gray-800">
            <CardContent className="pt-6">
              <p className="text-gray-300">
                Data Structures and Algorithms, Competitive Programming (Leetcode, CodeChef)
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                  Leetcode 500+ Problem Solver (Top 10% Globally)
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                  Ranked in Top 5% on CodeChef (1900+ Rating)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Tools and Frameworks</h3>
          <Card className="border-none shadow-md bg-gray-800">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Express.js</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">NumPy</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Chat Engine.io</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Firebase</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
