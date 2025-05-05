
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageNavigation from '@/components/PageNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Demo data for feature details
const featureDetails = [
  {
    title: "Smart Scheduling",
    description: "Our AI scheduling technology adapts to your work patterns and energy levels throughout the day. It automatically allocates high-focus tasks during your peak productivity hours and schedules routine tasks when your energy naturally dips.",
    benefits: [
      "30% increase in deep work time",
      "Reduced context switching",
      "Customized to your unique productivity patterns"
    ]
  },
  {
    title: "Intelligent Rescheduling",
    description: "When unexpected events occur, Schedulify doesn't just move one task - it reevaluates your entire day and creates the optimal new arrangement to minimize disruption and maintain your productivity momentum.",
    benefits: [
      "One-click rescheduling of your entire day",
      "Preserves important focus blocks",
      "Considers meeting dependencies"
    ]
  },
  {
    title: "Wellness Integration",
    description: "Schedulify is the only platform that treats breaks as essential productivity tools, not afterthoughts. Our AI recommends specific break activities based on your upcoming tasks, stress levels, and work duration.",
    benefits: [
      "Scientifically-timed break recommendations",
      "Personalized wellness suggestions",
      "Prevents burnout and maintains focus"
    ]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful <span className="gradient-text">Features</span> for Better Time Management
              </h1>
              <p className="text-lg text-gray-300">
                Discover how Schedulify's intelligent tools can transform your productivity and bring balance to your day.
              </p>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Dive Deeper Into Our Key Features</h2>
            
            <div className="space-y-16">
              {featureDetails.map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-schedulify-blue/20 to-schedulify-purple/20 rounded-xl flex items-center justify-center">
                      <p className="text-lg text-gray-400">Feature visualization {index + 1}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <h4 className="font-medium mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-schedulify-blue mr-2 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <CTASection />
        
        <PageNavigation 
          prevPage={{ path: "/about", label: "About Schedulify" }}
          nextPage={{ path: "/pricing", label: "View Pricing" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
