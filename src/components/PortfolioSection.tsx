import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projectsData";
import React, { useState, useEffect } from 'react'; // Import necessary hooks

const PortfolioSection = () => {
  const allProjects = projectsData;

  // State to track if the screen is large enough to show all six projects
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Determine the breakpoint where the layout switches from 1 column to 2 columns (sm: 640px)
    const checkScreenSize = () => {
      // If window width is 640px or greater, show all projects (sm:grid-cols-2 is active)
      setShowAll(window.innerWidth >= 640); 
    };

    // Set initial state
    checkScreenSize();

    // Listen for window resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Conditionally select the projects to display
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-10 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-black">
            Latest <span className="text-secondary text-glow-cyan">Projects</span>
          </h2>
          <p className="text-xl text-black/70">Real campaigns, real results.</p>
        </div>

        {/* Cards */}
        {/* The grid classes handle the layout (1, 2, or 3 columns) based on width. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MAPPING OVER THE CONDITIONAL ARRAY */}
          {visibleProjects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.slug}
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

        {/* Button */}
        <div className="text-center animate-fade-in mt-16">
          <Link to="/portfolio">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg group"
            >
              See more Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;