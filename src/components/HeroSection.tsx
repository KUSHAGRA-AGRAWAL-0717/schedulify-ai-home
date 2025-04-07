
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plan Smarter. <span className="gradient-text">Stress Less.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Schedulify uses AI to create personalized schedules that adapt to your needs, 
              preferences, and changing circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/signup">Try Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto animate-float">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Today's Schedule</h3>
                <div className="bg-blue-100 text-schedulify-blue font-medium px-3 py-1 rounded-full text-sm">
                  Optimized
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-5 w-5 text-schedulify-blue mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">8:00 - 9:30</p>
                    <p className="text-gray-600">Deep work: Project proposal</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-schedulify-purple mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">10:00 - 11:00</p>
                    <p className="text-gray-600">Team meeting (Conference room)</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-indigo-50 rounded-lg">
                  <Brain className="h-5 w-5 text-schedulify-indigo mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">12:00 - 1:00</p>
                    <p className="text-gray-600">Lunch + wellness break</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-schedulify-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-schedulify-purple opacity-5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
