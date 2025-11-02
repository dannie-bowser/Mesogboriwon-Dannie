import { Zap, BarChart3, Mail, PenTool, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Mail,
      title: 'Email Campaign Strategy',
      description: 'Crafting targeted campaigns that resonate',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Smart workflows for maximum efficiency',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and optimization',
    },
    {
      icon: PenTool,
      title: 'Copywriting',
      description: 'Compelling content that converts',
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Personalized messaging for better results',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Email into{' '}
            <span className="text-primary text-glow-cyan">Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I specialize in creating email marketing strategies that drive engagement,
            build lasting customer relationships, and deliver measurable ROI. With a
            data-first approach and creative storytelling, I help businesses unlock the
            full potential of their email marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
