import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-700 rounded-full mr-4 text-white">
                    <School className="h-6 w-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science</h3>
                    <p className="text-gray-400">Sir Padampat Singhania University (2021 - 2025)</p>
                    <p className="text-gray-400 mt-1">Percentage: 62%</p>
                    
                    <div className="mt-4">
                      <h4 className="text-white text-lg font-medium">Relevant Coursework</h4>
                      <p className="text-gray-300">
                        Machine Learning, Data Structures and Algorithms, Database Management, Web Development
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-center text-white mb-8">Certifications</h3>
              
              <div className="space-y-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gray-800">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold text-white">Google Cloud Data Analyst Course (Mar 2024)</h4>
                    <p className="text-gray-300 mt-2">
                      Gained expertise in cloud-based data analytics using BigQuery, SQL, and Data Pipelines.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gray-800">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold text-white">MERN Stack Certification - TechPark (2023-2024)</h4>
                    <p className="text-gray-300 mt-2">
                      Developed full-stack applications using MongoDB, Express.js, React.js, Node.js.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gray-800">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold text-white">Deep Learning Using Python - Great Learning (Mar 2023)</h4>
                    <p className="text-gray-300 mt-2">
                      Implemented deep learning models with TensorFlow and Keras.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
