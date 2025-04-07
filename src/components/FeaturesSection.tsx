
import React from 'react';
import { Calendar, RefreshCw, Brain, Clock, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-schedulify-blue mb-4" />,
    title: "Smart Scheduling",
    description: "Our AI analyzes your tasks, priorities, and energy levels to create optimized schedules tailored just for you."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-schedulify-purple mb-4" />,
    title: "Rescheduling with Ease",
    description: "Plans change. When they do, Schedulify automatically adjusts your entire schedule to accommodate without stress."
  },
  {
    icon: <Brain className="h-10 w-10 text-schedulify-indigo mb-4" />,
    title: "Personalized Wellness",
    description: "Balance productivity with wellbeing. Schedulify ensures you have time for breaks, exercise, and mindfulness."
  },
  {
    icon: <Clock className="h-10 w-10 text-schedulify-teal mb-4" />,
    title: "Time Blocking",
    description: "Group similar tasks together to maximize focus and minimize context switching for better productivity."
  },
  {
    icon: <Users className="h-10 w-10 text-schedulify-blue mb-4" />,
    title: "Team Coordination",
    description: "Sync calendars and find optimal meeting times that respect everyone's schedules and focus periods."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-schedulify-purple mb-4" />,
    title: "Privacy First",
    description: "Your data stays yours. Schedulify's AI runs locally when possible and follows strict privacy protocols."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Built for <span className="gradient-text">Productivity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedulify combines cutting-edge AI with thoughtful design to transform how you plan your day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
