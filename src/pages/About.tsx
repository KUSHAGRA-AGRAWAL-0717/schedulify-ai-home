
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageNavigation from '@/components/PageNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Brain, Award, Clock, Globe } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former Google AI researcher with a passion for making technology that helps people live better lives."
  },
  {
    name: "Sarah Chen",
    role: "Chief Product Officer",
    bio: "Productivity expert who spent 10 years researching how high performers manage their time and energy."
  },
  {
    name: "Marcus Williams",
    role: "Lead Engineer",
    bio: "Machine learning specialist focused on creating AI systems that learn from human behavior patterns."
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    bio: "Award-winning UX designer dedicated to creating interfaces that feel intuitive and effortless."
  }
];

// Company timeline
const companyTimeline = [
  {
    year: "2022",
    event: "Schedulify founded with a mission to revolutionize time management"
  },
  {
    year: "2023",
    event: "Secured $5M in seed funding to expand our AI scheduling technology"
  },
  {
    year: "2024",
    event: "Launched beta version with 10,000 early adopters across 25 countries"
  },
  {
    year: "2025",
    event: "Released enterprise solution and reached 100,000 active users milestone"
  }
];

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

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Schedulify began when our founder, Alex, discovered that despite having powerful digital tools, people were still struggling with the fundamental challenge of time management. The problem wasn't a lack of calendars or to-do lists - it was that these tools weren't adapting to how humans naturally work and rest.
              </p>
              <p className="text-gray-300 mb-6">
                After two years of research and development, we created an AI scheduling system that doesn't just track time but understands it. Our technology learns your unique productivity patterns, adapts to unexpected changes, and ensures you have the right balance of focus, collaboration, and rest.
              </p>
              <p className="text-gray-300">
                Today, Schedulify is helping thousands of professionals reclaim control of their time and find greater satisfaction in how they spend their days. We're just getting started on our mission to give everyone the power of truly intelligent scheduling.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-schedulify-blue/20 to-schedulify-purple/20 flex items-center justify-center">
                    <Users className="h-20 w-20 text-gray-600" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-schedulify-purple mb-3">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Company Timeline</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {companyTimeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-schedulify-blue flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      {index < companyTimeline.length - 1 && (
                        <div className="ml-5 h-16 w-0.5 bg-schedulify-blue/30"></div>
                      )}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold gradient-text mb-2">{item.year}</h3>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageNavigation 
          prevPage={{ path: "/", label: "Home" }}
          nextPage={{ path: "/features", label: "Explore Features" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default About;
