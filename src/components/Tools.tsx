import { Figma, Palette, Mail, Workflow, Database, BarChart } from 'lucide-react';

const Tools = () => {
  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'Canva', icon: Palette },
    { name: 'Mailchimp', icon: Mail },
    { name: 'Klaviyo', icon: Workflow },
    { name: 'BeFree', icon: Database },
    { name: 'HubSpot', icon: BarChart },
  ];

  return (
    <section className="py-20 relative bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools I <span className="text-primary text-glow-cyan">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging industry-leading platforms to deliver exceptional email marketing results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <tool.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-center">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
