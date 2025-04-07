
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Schedulify has transformed how I manage my time. I'm getting more done but somehow feeling less stressed about it all.",
    author: "Sarah J.",
    role: "Marketing Director",
    stars: 5
  },
  {
    quote: "As a freelancer juggling multiple clients, Schedulify has become my personal assistant. The AI suggests time blocks that maximize my productivity.",
    author: "Michael T.",
    role: "Graphic Designer",
    stars: 5
  },
  {
    quote: "I was skeptical about AI scheduling, but Schedulify won me over. It's like it knows when I need breaks even before I do!",
    author: "Jamie R.",
    role: "Software Engineer",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="gradient-bg-light section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of professionals use Schedulify to optimize their workday and find better balance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-200" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
