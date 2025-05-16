
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "ByteTrace",
      position: "Web Developer Intern",
      period: "July 2021 - Aug 2021",
      description: "Developed a portfolio website and landing page for the company, improving engagement by 20%. Built a real-time chat application using Chat Engine.io and Firebase."
    },
    {
      company: "Mocklo",
      position: "Business Development Executive Intern",
      period: "Feb 2020 - Apr 2020",
      description: "Engaged in lead generation, client acquisition, and market research for business expansion. Assisted in strategic planning and outreach, improving customer engagement and retention."
    },
    {
      company: "Hybrid International Research Internship",
      position: "Research Intern",
      period: "Dec 2022 - Mar 2023",
      description: "Contributed to heart disease prediction research using Support Vector Machines (SVM). Achieved 92% accuracy in preliminary tests."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-portfolio-blue mb-12">Internships</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${
                  index % 2 === 0 
                    ? 'md:flex md:justify-end' 
                    : 'md:flex'
                }`}
              >
                {/* Timeline marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="h-8 w-8 rounded-full bg-portfolio-blue text-white flex items-center justify-center shadow-md">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                
                {/* Card container */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-10 md:pl-0`}>
                  {/* Timeline marker (mobile) */}
                  <div className="md:hidden absolute left-0 top-0">
                    <div className="h-8 w-8 rounded-full bg-portfolio-blue text-white flex items-center justify-center shadow-md">
                      <Briefcase className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">{experience.company}</h3>
                      <p className="text-portfolio-blue font-medium">{experience.position}</p>
                      
                      <div className="flex items-center mt-2 mb-4 text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      
                      <p className="text-gray-700">{experience.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
