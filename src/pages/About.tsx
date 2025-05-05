
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Schedulify</span>
              </h1>
              <p className="text-lg text-gray-300">
                We're transforming how people manage their time with AI-powered scheduling that adapts to your unique needs and preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-schedulify-blue/20">
                <CardContent className="space-y-4 pt-4">
                  <Calendar className="h-12 w-12 text-schedulify-blue" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower individuals and teams with intelligent scheduling solutions that create more productive, balanced lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-schedulify-purple/20">
                <CardContent className="space-y-4 pt-4">
                  <Users className="h-12 w-12 text-schedulify-purple" />
                  <h3 className="text-xl font-semibold">Our Team</h3>
                  <p className="text-gray-300">
                    A dedicated group of engineers, designers, and AI specialists working to revolutionize time management.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-schedulify-indigo/20">
                <CardContent className="space-y-4 pt-4">
                  <Brain className="h-12 w-12 text-schedulify-indigo" />
                  <h3 className="text-xl font-semibold">Our Technology</h3>
                  <p className="text-gray-300">
                    Cutting-edge AI and machine learning algorithms that learn and adapt to your scheduling patterns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
