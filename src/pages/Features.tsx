
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, RefreshCw, Brain, Clock, Users, ShieldCheck } from 'lucide-react';

const featuresList = [
  {
    icon: <Calendar className="h-12 w-12 text-schedulify-blue mb-4" />,
    title: "Smart Scheduling",
    description: "Our AI analyzes your tasks, priorities, and energy levels to create optimized schedules tailored just for you.",
    details: [
      "Machine learning algorithms",
      "Personalized optimization",
      "Energy level tracking",
      "Priority-based scheduling"
    ]
  },
  {
    icon: <RefreshCw className="h-12 w-12 text-schedulify-purple mb-4" />,
    title: "Rescheduling with Ease",
    description: "Plans change. When they do, Schedulify automatically adjusts your entire schedule to accommodate without stress.",
    details: [
      "Automatic conflict resolution",
      "Smart rescheduling suggestions",
      "Minimal disruption algorithm",
      "Real-time updates"
    ]
  },
  {
    icon: <Brain className="h-12 w-12 text-schedulify-indigo mb-4" />,
    title: "Personalized Wellness",
    description: "Balance productivity with wellbeing. Schedulify ensures you have time for breaks, exercise, and mindfulness.",
    details: [
      "Break time optimization",
      "Wellness activity suggestions",
      "Focus period scheduling",
      "Work-life balance tracking"
    ]
  },
  {
    icon: <Clock className="h-12 w-12 text-schedulify-teal mb-4" />,
    title: "Time Blocking",
    description: "Group similar tasks together to maximize focus and minimize context switching for better productivity.",
    details: [
      "Smart task grouping",
      "Focus time blocks",
      "Productivity analytics",
      "Custom block templates"
    ]
  },
  {
    icon: <Users className="h-12 w-12 text-schedulify-blue mb-4" />,
    title: "Team Coordination",
    description: "Sync calendars and find optimal meeting times that respect everyone's schedules and focus periods.",
    details: [
      "Multi-calendar sync",
      "Meeting time optimizer",
      "Team availability view",
      "Collaborative scheduling"
    ]
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-schedulify-purple mb-4" />,
    title: "Privacy First",
    description: "Your data stays yours. Schedulify's AI runs locally when possible and follows strict privacy protocols.",
    details: [
      "Local AI processing",
      "End-to-end encryption",
      "GDPR compliance",
      "Data anonymization"
    ]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful <span className="gradient-text">Features</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how Schedulify can transform your time management with our comprehensive suite of features.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-schedulify-blue" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
