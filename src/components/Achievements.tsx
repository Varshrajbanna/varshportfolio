import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "State-Level Handball Champion",
      description: "Madhya Pradesh, 2021",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Leetcode 500+ Problem Solver",
      description: "Top 10% Globally",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Ranked in Top 5% on CodeChef",
      description: "1900+ Rating",
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Achievements</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-blue-700 rounded-full mb-4 text-white">
                  {achievement.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-none shadow-lg bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Interests</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full">Chess</span>
                <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full">Carrom</span>
                <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full">Handball</span>
                <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full">Competitive Programming</span>
                <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full">Open Source Contributions</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
