import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';

const Portfolio = () => {
  // Create 12 projects by repeating the 6 original projects
  const projects = [...projectsData, ...projectsData];

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
                Success <span className="text-primary text-glow-cyan">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real campaigns, real results. See how data-driven email marketing transforms businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            {/* Cards - using PortfolioSection style with images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MAPPING OVER 12 PROJECTS */}
              {projects.map((project, index) => (
                <Link
                  to={`/project/${project.slug}`}
                  key={`${project.slug}-${index}`}
                  className="group relative overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer block"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* TEXT UNDER IMAGE */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-3xl font-extrabold text-black leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-primary text-lg font-medium mt-1">
                          {project.client}
                        </p>
                      </div>

                      {/* Rotated Arrow Icon - only visible on hover */}
                      <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-black opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 -rotate-45" />
                      </div>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-black/5 text-black rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
