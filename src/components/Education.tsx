
import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-portfolio-blue mb-12">Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <School className="h-6 w-6 text-portfolio-blue" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science</h3>
                  <p className="text-gray-600">IPS College of Technology (2019 - 2023)</p>
                  <p className="text-gray-700 mt-1">Percentage: 82%</p>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-portfolio-blue">Relevant Coursework</h4>
                    <p className="text-gray-700">
                      Machine Learning, Data Structures and Algorithms, Database Management, Web Development
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-center text-portfolio-blue mb-8">Certifications</h3>
            
            <div className="space-y-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800">Google Cloud Data Analyst Course (Mar 2024)</h4>
                  <p className="text-gray-700 mt-2">
                    Gained expertise in cloud-based data analytics using BigQuery, SQL, and Data Pipelines.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800">MERN Stack Certification - TechPark (2023-2024)</h4>
                  <p className="text-gray-700 mt-2">
                    Developed full-stack applications using MongoDB, Express.js, React.js, Node.js.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800">Deep Learning Using Python - Great Learning (Mar 2023)</h4>
                  <p className="text-gray-700 mt-2">
                    Implemented deep learning models with TensorFlow and Keras.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
