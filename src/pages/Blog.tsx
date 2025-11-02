import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const articles = [
    {
      title: '10 Email Automation Workflows Every Business Needs',
      excerpt: 'Discover the essential automated email sequences that can transform your customer journey and boost revenue on autopilot.',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Automation',
    },
    {
      title: 'The Psychology Behind High-Converting Email Subject Lines',
      excerpt: 'Learn the proven psychological triggers that make subscribers click and how to craft subject lines that get opened.',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Copywriting',
    },
    {
      title: 'How to Segment Your Email List for Maximum Engagement',
      excerpt: 'Master the art of audience segmentation with these advanced strategies that deliver personalized experiences at scale.',
      date: '2024-03-05',
      readTime: '10 min read',
      category: 'Strategy',
    },
    {
      title: 'Email Analytics: The Metrics That Actually Matter',
      excerpt: 'Cut through the noise and focus on the KPIs that truly indicate email marketing success and drive business growth.',
      date: '2024-02-28',
      readTime: '7 min read',
      category: 'Analytics',
    },
    {
      title: 'Building a Welcome Series That Converts New Subscribers',
      excerpt: 'Step-by-step guide to creating welcome email sequences that build trust, provide value, and drive early conversions.',
      date: '2024-02-20',
      readTime: '9 min read',
      category: 'Strategy',
    },
    {
      title: 'Mobile-First Email Design: Best Practices for 2024',
      excerpt: 'With 70% of emails opened on mobile, learn how to design emails that look stunning and convert on any device.',
      date: '2024-02-15',
      readTime: '5 min read',
      category: 'Design',
    },
  ];

  const categories = ['All', 'Strategy', 'Automation', 'Analytics', 'Copywriting', 'Design'];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Email Marketing <span className="text-primary text-glow-cyan">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert strategies, best practices, and actionable tips to elevate your email marketing game
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="neon-border-cyan hover:glow-cyan"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.title}
                  className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border neon-border-cyan mb-4">
                    {article.category}
                  </span>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
