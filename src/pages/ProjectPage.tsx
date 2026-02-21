import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ZoomIn, ChevronLeft, ChevronRight, X, ZoomOut, Contact, Download, FileText } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projectsData";
import picone from "@/assets/picone.png";
import ContactSection from "@/components/ContactSection";

// Create tiny blur-up placeholders inline (1x1 px base64)
const BLUR_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Aggressive preload images for faster switching
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());

  // Use project's gallery images or fallback to picone
  const emailDesigns = project?.gallery && project.gallery.length > 0 ? project.gallery : [picone, picone, picone, picone, picone, picone];

  // Aggressive preload strategy - preload all images on component mount and when modal opens
  useEffect(() => {
    const preloadAllImages = () => {
      emailDesigns.forEach((src, idx) => {
        if (!imageCache.current.has(idx)) {
          const img = new Image();
          img.src = src;
          imageCache.current.set(idx, img);
          
          // Mark as loaded when ready
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, idx]));
          };
        }
      });
    };

    // Preload immediately on mount
    preloadAllImages();
    
    // Aggressive preload when modal opens
    if (isModalOpen) {
      preloadAllImages();
    }
  }, [isModalOpen, emailDesigns]);

  // Preload adjacent images with priority
  useEffect(() => {
    if (!isModalOpen) return;

    const nextIdx = (currentImageIndex + 1) % emailDesigns.length;
    const prevIdx = (currentImageIndex - 1 + emailDesigns.length) % emailDesigns.length;

    [nextIdx, prevIdx].forEach((idx) => {
      if (!imageCache.current.has(idx)) {
        const img = new Image();
        img.src = emailDesigns[idx];
        imageCache.current.set(idx, img);
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, idx]));
        };
      }
    });
  }, [currentImageIndex, isModalOpen, emailDesigns]);

  const toggleLike = (index: number) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  const nextImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % emailDesigns.length);
    resetZoom();
  };

  const prevImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + emailDesigns.length) % emailDesigns.length);
    resetZoom();
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPanX(0);
    setPanY(0);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1) resetZoom();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imageRef.current) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPanX(newX);
    setPanY(newY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      resetZoom();
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!project) {
    return (
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navigation />
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the project you're looking for.</p>
            <Link to="/portfolio">
              <Button className="bg-secondary hover:bg-secondary/90">
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
          {/* Back Button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-black/70 hover:text-secondary transition-colors mb-8 sm:mb-12 group"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm sm:text-base">Back to Portfolio</span>
          </Link>

          {/* Hero Section with Flex Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-8 md:mb-8">
            {/* Left Side - Project Image */}
            <div className="relative order-2 md:order-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-lg sm:rounded-xl shadow-2xl border border-primary/20 hover:border-secondary/40 transition-all"
              />
            </div>

            {/* Right Side - Project Info */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 md:order-2">
              {/* Title and Client */}
              <div>
                <p className="text-black/70 text-xs sm:text-sm font-semibold uppercase mb-2">— {project.client}</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-background">{project.title}</h1>
                <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">{project.description}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-black/60  bg-black/1">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-black/70">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Side by Side */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
                {/* Challenge */}
                {project.challenge && (
                  <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-black/5 border border-black/20">
                    <h3 className="text-base sm:text-lg font-semibold text-black/70 mb-2 sm:mb-3">The Challenge</h3>
                    <p className="text-xs sm:text-sm md:text-base text-black/70 leading-relaxed">{project.challenge}</p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="p-4 sm:p-5 md:p-6 rounded-lg  bg-black/5 border border-black/20">
                    <h3 className="text-base sm:text-lg font-semibold  text-black/70 mb-2 sm:mb-3">The Solution</h3>
                    <p className="text-xs sm:text-sm md:text-base  text-black/70 leading-relaxed">{project.solution}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Full Description Section */}
          {project.fullDescription && (
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-background">Project Overview</h2>
              <p className="text-sm sm:text-base md:text-lg text-background leading-relaxed">{project.fullDescription}</p>
            </div>
          )}

          {/* Documents Section - Only show if documents exist */}
          {project.documents && project.documents.length > 0 && (
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-background">Project Documents</h2>
              
              {/* Documents Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    download
                    className="group relative overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg p-4 sm:p-6 hover:border-secondary/50 cursor-pointer block w-full"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-1 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-background/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-background truncate group-hover:text-secondary transition-colors">
                            {doc.name}
                          </h3>
                          <p className="text-sm text-black/50 group-hover:text-secondary/70 transition-colors">
                            {doc.type} File
                          </p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Email Designs Gallery Section - Only show if gallery exists */}
          {emailDesigns && emailDesigns.length > 0 && (
            <div className="mb-12 sm:mb-16 md:mb-20">
            {/* Main Image Viewer */}
            <div className="relative mb-6 sm:mb-8 group">
              <div className="relative overflow-hidden rounded-xl border border-secondary/30 bg-black/50 cursor-pointer">
                <img
                  src={emailDesigns[currentImageIndex]}
                  alt={`Email Design ${currentImageIndex + 1}`}
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-[600px] object-cover hover:opacity-90 transition-opacity"
                  onClick={() => setIsModalOpen(true)}
                  loading="lazy"
                  decoding="async"
                />

                {/* Zoom Icon */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 p-1.5 sm:p-2 md:p-3 rounded-full bg-white/50 text-white hover:bg-secondary/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110 duration-200"
                >
                  <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/50 text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110 duration-200"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/50 text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110 duration-200"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(currentImageIndex)}
                  className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 p-1.5 sm:p-2 md:p-3 rounded-full bg-white/50 text-white hover:bg-secondary/90 transition-all cursor-pointer hover:scale-110 duration-200"
                >
                  <Heart
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    fill={likedImages.has(currentImageIndex) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
                {currentImageIndex + 1} / {emailDesigns.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {emailDesigns.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-secondary scale-105"
                      : "border-transparent hover:border-primary/50"
                  }`}
                  type="button"
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-12 sm:h-16 md:h-20 lg:h-24 object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Like Count Badge */}
                  {likedImages.has(index) && (
                    <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 bg-secondary text-background rounded-full p-0.5 sm:p-1 text-xs font-bold flex items-center gap-0.5">
                      <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            </div>          )}
          {/* Tags/Skills Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-black/70">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-black/10 text-black border border-black/20 hover:border-primary/40 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            type="button"
            className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/50 text-white hover:bg-secondary/80 transition-all z-[10000] cursor-pointer hover:scale-110 duration-200"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Main Image Container */}
          <div 
            className="flex items-center justify-center w-full h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              {/* Placeholder with blur while loading */}
              {isImageLoading && (
                <img
                  src={BLUR_PLACEHOLDER}
                  alt="Loading"
                  className="absolute inset-0 w-full h-full blur-3xl opacity-40"
                />
              )}
              
              {/* Loading spinner - minimal and fast */}
              {isImageLoading && (
                <div className="absolute z-50 pointer-events-none">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-secondary border-t-transparent" />
                </div>
              )}
              
              {/* Main Image - optimized for speed */}
              <img
                ref={imageRef}
                src={emailDesigns[currentImageIndex]}
                alt={`Email Design ${currentImageIndex + 1}`}
                className="max-w-full max-h-full cursor-grab active:cursor-grabbing transition-transform select-none will-change-transform"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                  opacity: isImageLoading ? 0.7 : 1,
                  transition: isImageLoading ? 'none' : 'opacity 0.2s ease-out',
                }}
                draggable={false}
                onLoad={() => {
                  setIsImageLoading(false);
                  // Add index to loaded set
                  setLoadedImages(prev => new Set([...prev, currentImageIndex]));
                }}
                onError={() => setIsImageLoading(false)}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Controls - Optimized for mobile and desktop */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3 bg-black/60 rounded-full p-2 sm:p-2.5 md:p-3 backdrop-blur z-[10000]">
            {/* Zoom Out */}
            <button
              onClick={zoomOut}
              type="button"
              className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/40 hover:bg-secondary transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:scale-105 duration-150"
              disabled={zoomLevel <= 1}
              title="Zoom out"
            >
              <ZoomOut className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </button>

            {/* Zoom Level Display */}
            <div className="flex items-center gap-1 px-1.5 sm:px-2 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
              {Math.round(zoomLevel * 100)}%
            </div>

            {/* Zoom In */}
            <button
              onClick={zoomIn}
              type="button"
              className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/40 hover:bg-secondary transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:scale-105 duration-150"
              disabled={zoomLevel >= 3}
              title="Zoom in"
            >
              <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </button>

            <div className="w-px bg-white/20"></div>

            {/* Previous Image */}
            <button
              onClick={prevImage}
              type="button"
              className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/40 hover:bg-secondary transition-all cursor-pointer hover:scale-105 duration-150"
              title="Previous image"
            >
              <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </button>

            {/* Image Counter */}
            <div className="flex items-center gap-1 px-1.5 sm:px-2 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
              {currentImageIndex + 1} / {emailDesigns.length}
            </div>

            {/* Next Image */}
            <button
              onClick={nextImage}
              type="button"
              className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/40 hover:bg-secondary transition-all cursor-pointer hover:scale-105 duration-150"
              title="Next image"
            >
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </button>

            <div className="w-px bg-white/20"></div>

            {/* Like Button */}
            <button
              onClick={() => toggleLike(currentImageIndex)}
              type="button"
              className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/40 hover:bg-secondary transition-all cursor-pointer hover:scale-105 duration-150"
              title="Like image"
            >
              <Heart
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                fill={likedImages.has(currentImageIndex) ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Navigation Arrows - Optimized for touch and desktop */}
          <button
            onClick={prevImage}
            type="button"
            className="absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/40 hover:bg-secondary transition-all z-[10000] cursor-pointer hover:scale-105 duration-150"
            title="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextImage}
            type="button"
            className="absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/40 hover:bg-secondary transition-all z-[10000] cursor-pointer hover:scale-105 duration-150"
            title="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      )}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProjectPage;
