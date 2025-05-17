import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "ByteUprise",
      position: "Web Developer Intern",
      period: "July 2021 - Aug 2021",
      description: "Developed a portfolio website and landing page for the company, improving engagement by 20%. Built a real-time chat application using Chat Engine.io and Firebase.",
      achievements: [
        "Improved website engagement by 20%",
        "Built real-time chat application",
        "Integrated Firebase for backend"
      ]
    },
    {
      company: "MoviduTechnology",
      position: "Business Development Executive Intern",
      period: "Feb 2020 - Apr 2020",
      description: "Engaged in lead generation, client acquisition, and market research for business expansion. Assisted in strategic planning and outreach, improving customer engagement and retention.",
      achievements: [
        "Generated 50+ qualified leads",
        "Improved customer retention by 15%",
        "Conducted market research for expansion"
      ]
    },
    {
      company: "Hybrid International Research Internship",
      position: "Research Intern",
      period: "Dec 2022 - Mar 2023",
      description: "Contributed to heart disease prediction research using Support Vector Machines (SVM). Achieved 92% accuracy in preliminary tests.",
      achievements: [
        "Achieved 92% accuracy in predictions",
        "Implemented SVM algorithms",
        "Published research findings"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My experience spans across web development, business development, and research, showcasing my versatility and adaptability.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform -translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 
                    ? 'md:flex md:justify-end' 
                    : 'md:flex'
                }`}
              >
                {/* Timeline marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Card container */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-10 md:pl-0`}>
                  {/* Timeline marker (mobile) */}
                  <div className="md:hidden absolute left-0 top-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {experience.company}
                          </h3>
                          <p className="text-blue-400 font-medium">{experience.position}</p>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mt-4">{experience.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
