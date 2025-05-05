
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <Card className={`${highlighted ? 'border-schedulify-blue shadow-lg' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <div className="mt-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-300">/month</span>}
      </div>
      <p className="text-gray-300 mt-4">{description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full mt-6" variant={highlighted ? 'default' : 'outline'}>
        <Link to="/signup">Get Started</Link>
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      description: "Perfect for individuals getting started",
      features: [
        "Basic schedule creation",
        "Manual rescheduling",
        "3 calendar integrations",
        "Email support"
      ]
    },
    {
      title: "Pro",
      price: "$12",
      description: "Ideal for professionals and small teams",
      features: [
        "AI-powered scheduling",
        "Automatic rescheduling",
        "Unlimited calendar integrations",
        "Priority support",
        "Team collaboration features"
      ],
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "$29",
      description: "For organizations requiring advanced features",
      features: [
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "24/7 dedicated support",
        "SSO & advanced security"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingTier key={index} {...plan} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
