import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // ✅ Get Tailwind "secondary" color from CSS variable
    const rawSecondary = getComputedStyle(document.documentElement)
      .getPropertyValue("--secondary")
      .trim();

    const secondaryColor = `rgb(${rawSecondary})`; // canvas-compatible

    class Particle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      opacity: number;
      size: number;
      type: "dot" | "line";
      length: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.type = Math.random() < 0.7 ? "dot" : "line";

        this.size = Math.random() * 1.4 + 0.4;
        this.length = Math.random() * 12 + 6;

        if (this.type === "dot") {
          this.speedX = Math.random() * 0.4 - 0.2;
          this.speedY = Math.random() * 0.4 - 0.2;
        } else {
          this.speedX = Math.random() * 1.2 - 0.6;
          this.speedY = Math.random() * 1.2 - 0.6;
        }

        this.opacity = Math.random() * 0.4 + 0.2;

        // ⭐ 20% chance of being secondary-colored
        this.color = Math.random() < 0.2 ? secondaryColor : "black";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        if (this.type === "dot") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(
            this.x + this.length * this.speedX * 0.7,
            this.y + this.length * this.speedY * 0.7
          );
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }
    }

    const particleCount = Math.floor(
      (canvas.width * canvas.height) / 3500
    );

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", setCanvasSize);
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.45 }}
    />
  );
};

export default ParticleBackground;
