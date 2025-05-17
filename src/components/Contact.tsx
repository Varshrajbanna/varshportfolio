import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting me. I'll get back to you soon!",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="border-none shadow-lg col-span-1 bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-blue-700 text-white mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:varshrajsingh5@gmail.com" className="text-blue-400 hover:underline">
                      varshrajsingh5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-blue-700 text-white mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a href="tel:+919174821956" className="text-blue-400 hover:underline">
                      +91 9174821956
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-blue-700 text-white mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">
                      House No. 156, Gram Sherpur,<br />
                      District Ratlam, Madhya Pradesh, 457331
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className="border-none shadow-lg col-span-1 md:col-span-2 bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      type="email"
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={5}
                    className="w-full resize-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-600 text-white w-full flex items-center justify-center gap-2"
                >
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
