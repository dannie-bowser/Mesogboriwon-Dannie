import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Target, Zap, BarChart3, Layout, Users, Mail, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';


const Services = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skills = [
    { 
      number: '01', 
      title: 'Email Designs',
      description: 'Creating visually stunning, responsive email templates that captivate your audience and drive conversions across all devices.'
    },
    { 
      number: '02', 
      title: 'Email Campaign & Strategy',
      description: 'Developing comprehensive email marketing strategies that align with your business goals and deliver measurable results.'
    },
    { 
      number: '03', 
      title: 'Automation',
      description: 'Building sophisticated email automation workflows that nurture leads, save time, and increase customer lifetime value.'
    },
    { 
      number: '04', 
      title: 'Analytics & Reporting',
      description: 'Providing detailed insights into campaign performance with actionable metrics that guide strategic decision-making.'
    },
    { 
      number: '05', 
      title: 'Copywriting',
      description: 'Crafting compelling email copy that resonates with your audience, drives engagement, and inspires action.'
    },
    { 
      number: '06', 
      title: 'Audience Segmentation',
      description: 'Segmenting your audience strategically to deliver personalized messages that increase relevance and conversion rates.'
    },
    { 
      number: '07', 
      title: 'Landing Page design',
      description: 'Designing high-converting landing pages that seamlessly integrate with your email campaigns for maximum impact.'
    },
  ];

  const toggleSkill = (skillTitle: string) => {
    setExpandedSkill(expandedSkill === skillTitle ? null : skillTitle);
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
    <section className="py-8 sm:py-12 md:py-16 relative mt-16 sm:mt-20 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="max-w-4xl animate-fade-in text-center mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-2 text-background">
            Transforming Email into{' '}
            <span className="text-secondary text-glow-cyan">Revenue</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black/70 px-2 sm:px-0">
            I specialize in creating email marketing strategies that drive engagement,
            build lasting customer relationships, and deliver measurable ROI. With a
            data-first approach and creative storytelling, I help businesses unlock the
            full potential of their email marketing.
          </p>
        </div>

        {/* LIST - Center Aligned and Responsive */}
        <div className="space-y-0 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.title} className="relative">

              {/* Row - Responsive and center-aligned */}
              <div 
                className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 sm:py-8 cursor-pointer hover:bg-black/2 transition-colors rounded-lg px-2 sm:px-4 gap-3 sm:gap-0"
                onClick={() => toggleSkill(skill.title)}
              >
                <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
                  <span className="text-primary font-semibold text-base sm:text-lg md:text-xl flex-shrink-0">
                    {skill.number}
                  </span>

                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-background tracking-tight break-words">
                    {skill.title}
                  </h3>
                </div>

                <button 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0"
                  style={{
                    transform: expandedSkill === skill.title ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                >
                  <ArrowRight className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Expanding Description - Responsive */}
              {expandedSkill === skill.title && (
                <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-2 sm:px-4 pb-4 sm:pb-6 sm:pl-12 md:pl-20 lg:pl-28">
                    <p className="text-xs sm:text-base md:text-lg text-black/70 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Divider */}
              {index < skills.length - 1 && (
                <div className="absolute left-0 w-full h-px bg-black/10" style={{ bottom: 0 }} />
              )}

            </div>
          ))}
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default Services;
