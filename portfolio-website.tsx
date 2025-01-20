import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Heart, Users, Lightbulb, Rocket } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative p-8 bg-gradient-to-br from-purple-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Alaysia Brown
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Crafting Bold & Purposeful Brand Stories
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I transform brands through authentic storytelling, creating meaningful connections that inspire action and drive impact.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors">
            Explore My Work
          </button>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Cutwater Influencer Program",
                description: "Designed and produced 'Bar Where You Are,' an immersive lake experience connecting Atlanta-based black male influencers with Cutwater Spirits.",
                image: "/api/placeholder/600/400",
              },
              {
                title: "The Night Brunch Partnership",
                description: "Orchestrated a unique collaboration between Cutwater Spirits and The Night Brunch, featuring customized experiences and local partnerships in Baltimore.",
                image: "/api/placeholder/600/400",
              },
              {
                title: "Black Girls Chillin",
                description: "Co-founded a thriving digital community supporting and empowering black women globally through meaningful connections and safe spaces.",
                image: "/api/placeholder/600/400",
              },
              {
                title: "Real Spirits. Real Supper.",
                description: "Produced an innovative dinner series celebrating Atlanta's behind-the-scenes entertainment professionals.",
                image: "/api/placeholder/600/400",
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-purple-600 font-medium">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-8 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Brand Strategy",
                description: "Creating distinctive brand identities through compelling storytelling and strategic business planning."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Event Management",
                description: "Crafting unforgettable experiences by blending imaginative concepts with meticulous execution."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Experiential Design",
                description: "Developing immersive brand experiences that captivate and engage audiences."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Building",
                description: "Fostering authentic connections through strategic engagement and meaningful interactions."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-gray-600 mb-8">
            Ready to transform your brand through purposeful storytelling and meaningful experiences?
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
