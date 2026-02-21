// src/data/servicesData.ts

interface Service {
  title: string;
  description: string;
  features: string[];
  color: 'cyan' | 'magenta' | 'blue';
}

export const servicesData: Service[] = [
    {
      title: 'Email Campaign Strategy',
      description: 'Custom campaigns designed for your audience',
      features: [
        'Audience research and persona development',
        'Campaign calendar planning',
        'Content strategy and messaging',
        'A/B testing frameworks',
        'KPI tracking and optimization',
      ],
      color: 'cyan',
    },
    {
      title: 'Automation',
      description: 'Smart workflows to increase engagement',
      features: [
        'Welcome series automation',
        'Abandoned cart recovery',
        'Re-engagement campaigns',
        'Drip campaign sequences',
        'Trigger-based workflows',
      ],
      color: 'magenta',
    },
    {
      title: 'Analytics & Reporting',
      description: 'In-depth performance insights',
      features: [
        'Custom dashboard creation',
        'Monthly performance reports',
        'Conversion tracking setup',
        'ROI analysis and forecasting',
        'Competitive benchmarking',
      ],
      color: 'blue',
    },
    {
      title: 'Landing Page Design',
      description: 'High-converting email-led pages',
      features: [
        'Conversion-focused design',
        'Mobile-responsive layouts',
        'Form optimization',
        'CTA strategy and placement',
        'Performance testing',
      ],
      color: 'cyan',
    },
    {
      title: 'Audience Segmentation',
      description: 'Personalized messaging for better results',
      features: [
        'Behavioral segmentation',
        'Demographic targeting',
        'Engagement-based groups',
        'Custom segment creation',
        'Dynamic content delivery',
      ],
      color: 'magenta',
    },
    {
      title: 'Growth Consulting',
      description: 'Strategic guidance for scaling',
      features: [
        'Email marketing audits',
        'Growth strategy development',
        'Team training and workshops',
        'Tool selection and integration',
        'Best practice implementation',
      ],
      color: 'blue',
    },
];