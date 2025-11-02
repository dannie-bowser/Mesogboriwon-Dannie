import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-commerce Welcome Series',
      client: 'StyleHub Fashion',
      description: 'Designed and implemented a 7-email welcome series that increased new customer conversions by 85% and reduced cart abandonment by 40%.',
      metrics: [
        { label: 'Conversion Rate', value: '+85%' },
        { label: 'Open Rate', value: '62%' },
        { label: 'Revenue Generated', value: '$125K' },
      ],
      tags: ['Automation', 'E-commerce', 'Welcome Series'],
    },
    {
      title: 'SaaS Re-engagement Campaign',
      client: 'TechStart Pro',
      description: 'Created targeted re-engagement campaign that brought back 35% of inactive users and generated $200K in recovered revenue.',
      metrics: [
        { label: 'Users Reactivated', value: '1,200+' },
        { label: 'Click Rate', value: '45%' },
        { label: 'Revenue Recovered', value: '$200K' },
      ],
      tags: ['Re-engagement', 'SaaS', 'Automation'],
    },
    {
      title: 'B2B Lead Nurture Workflow',
      client: 'GrowthLabs',
      description: 'Developed comprehensive nurture workflow that shortened sales cycle by 30% and improved lead-to-customer conversion by 55%.',
      metrics: [
        { label: 'Conversion Rate', value: '+55%' },
        { label: 'Sales Cycle', value: '-30%' },
        { label: 'Qualified Leads', value: '450+' },
      ],
      tags: ['B2B', 'Lead Nurture', 'Automation'],
    },
    {
      title: 'Product Launch Campaign',
      client: 'InnovateTech',
      description: 'Orchestrated multi-touch product launch campaign achieving 10,000+ pre-orders and $500K in first-week revenue.',
      metrics: [
        { label: 'Pre-orders', value: '10K+' },
        { label: 'Open Rate', value: '58%' },
        { label: 'Week 1 Revenue', value: '$500K' },
      ],
      tags: ['Product Launch', 'Campaign Strategy', 'B2C'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-primary text-glow-cyan">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real campaigns, real results. See how data-driven email marketing transforms businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary text-sm">{project.client}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-background/50 rounded-lg">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border neon-border-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
