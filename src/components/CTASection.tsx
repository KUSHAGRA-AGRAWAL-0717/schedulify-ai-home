
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-schedulify-blue to-schedulify-purple rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who've discovered the power of AI-assisted scheduling. Try Schedulify free for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-schedulify-blue hover:bg-gray-100">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/login">Request Demo</Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
