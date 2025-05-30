import React, { useEffect, useRef, useCallback } from "react";

const config = {
  particleColor: "#FF00FF",
  desktopMaxParticles: 85, // Max particles for desktop
  mobileMaxParticles: 40, // Reduced max particles for mobile
  baseSpeed: 0.5,
  wiggleStrength: 3,
  maxParallaxOffset: 25,
  yParallaxFactor: 0.2,
  minParticleSize: 12,
  maxParticleSize: 22,
  maxBaseShadowBlur: 12,
  minBaseShadowBlur: 6,
  shadowPulseAmount: 3
};

const characters = ["S", "O", "P", "H", "I", "E"];

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  let bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b };
}

class Particle {
  private canvasWidth: number;
  private canvasHeight: number;
  private parallaxOffsetXRef: React.MutableRefObject<number>;
  private parallaxOffsetYRef: React.MutableRefObject<number>;

  public baseX: number = 0;
  public y: number = 0;
  public char: string = "";
  public speed: number = 0;
  public opacity: number = 0;
  public targetOpacity: number = 0;
  public glowPhase: number = 0;
  public life: number = 0;
  public maxLife: number = 0;
  public parallaxMultiplier: number = 0;
  public size: number = 0;
  public baseShadowBlur: number = 0;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    _parallaxOffsetXRef: React.MutableRefObject<number>,
    _parallaxOffsetYRef: React.MutableRefObject<number>
  ) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.parallaxOffsetXRef = _parallaxOffsetXRef;
    this.parallaxOffsetYRef = _parallaxOffsetYRef;
    this.reset();
  }

  reset(): void {
    this.baseX = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight + Math.random() * 150;
    this.char = characters[Math.floor(Math.random() * characters.length)];
    this.speed = (Math.random() * 0.5 + 0.2) * config.baseSpeed;
    this.opacity = 0;
    this.targetOpacity = Math.random() * 0.5 + 0.4;
    this.glowPhase = Math.random() * Math.PI * 2;
    this.life = 0;
    this.maxLife = Math.random() * 1400 + 1200;

    const parallaxStrengths: number[] = [0.15, 0.45, 0.75];
    this.parallaxMultiplier =
      parallaxStrengths[Math.floor(Math.random() * parallaxStrengths.length)];

    this.size =
      config.minParticleSize +
      this.parallaxMultiplier *
        (config.maxParticleSize - config.minParticleSize);
    this.baseShadowBlur =
      config.maxBaseShadowBlur -
      this.parallaxMultiplier *
        (config.maxBaseShadowBlur - config.minBaseShadowBlur);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const wiggleOffset: number =
      Math.sin(this.glowPhase * 0.5) * config.wiggleStrength;
    const actualDrawX: number =
      this.baseX +
      wiggleOffset +
      this.parallaxOffsetXRef.current * this.parallaxMultiplier;
    const actualDrawY: number =
      this.y + this.parallaxOffsetYRef.current * this.parallaxMultiplier;

    ctx.shadowBlur =
      this.baseShadowBlur + Math.sin(this.glowPhase) * config.shadowPulseAmount;
    ctx.shadowColor = config.particleColor;

    ctx.font = `${this.size}px 'Elder Magic', cursive`; // Using 'Elder Magic' font
    const particleRgb: RGB = hexToRgb(config.particleColor);
    ctx.fillStyle = `rgba(${particleRgb.r}, ${particleRgb.g}, ${particleRgb.b}, ${this.opacity})`;
    ctx.textAlign = "center";
    ctx.fillText(this.char, actualDrawX, actualDrawY);

    ctx.shadowBlur = 0;
  }

  update(): void {
    this.y -= this.speed;
    this.life++;

    if (this.opacity < this.targetOpacity && this.life < this.maxLife / 4.5) {
      this.opacity += 0.015;
    }

    const fadeStartY: number = this.canvasHeight * 0.55;
    const visualY: number =
      this.y + this.parallaxOffsetYRef.current * this.parallaxMultiplier;

    if (visualY < fadeStartY || this.life > this.maxLife * 0.6) {
      this.opacity -= 0.0025;
    }

    this.glowPhase += 0.035;

    const resetBoundaryY: number = this.canvasHeight * 0.1;
    if (
      this.opacity <= 0 ||
      visualY < resetBoundaryY ||
      this.life >= this.maxLife
    ) {
      this.reset();
    }
  }
}

const FloatingRunesAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const parallaxOffsetXRef = useRef<number>(0);
  const parallaxOffsetYRef = useRef<number>(0);
  const canvasWidthRef = useRef<number>(0);
  const canvasHeightRef = useRef<number>(0);
  // Ref to store the effective max particles based on device
  const effectiveMaxParticlesRef = useRef<number>(config.desktopMaxParticles);

  const initParticles = useCallback((): void => {
    if (canvasWidthRef.current === 0 || canvasHeightRef.current === 0) {
      if (typeof window !== "undefined") {
        canvasWidthRef.current = window.innerWidth;
        canvasHeightRef.current = window.innerHeight;
      } else {
        canvasWidthRef.current = 1920;
        canvasHeightRef.current = 1080;
      }
    }

    particlesRef.current = [];
    // Use the effectiveMaxParticlesRef for the loop limit
    for (let i = 0; i < effectiveMaxParticlesRef.current; i++) {
      particlesRef.current.push(
        new Particle(
          canvasWidthRef.current,
          canvasHeightRef.current,
          parallaxOffsetXRef,
          parallaxOffsetYRef
        )
      );
    }
  }, []); // No dependencies needed as it reads from refs

  const resizeCanvas = useCallback((): void => {
    if (typeof window !== "undefined") {
      canvasWidthRef.current = window.innerWidth;
      canvasHeightRef.current = window.innerHeight;
      if (canvasRef.current) {
        canvasRef.current.width = canvasWidthRef.current;
        canvasRef.current.height = canvasHeightRef.current;
      }
    }
    initParticles();
  }, [initParticles]);

  const animate = useCallback((): void => {
    if (!canvasRef.current || canvasWidthRef.current === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidthRef.current, canvasHeightRef.current);

    particlesRef.current.forEach((particle) => {
      particle.update();
      particle.draw(ctx);
    });

    animationFrameIdRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent): void => {
    if (canvasWidthRef.current === 0) return;
    const mouseNormX: number =
      (event.clientX - canvasWidthRef.current / 2) /
      (canvasWidthRef.current / 2);
    const mouseNormY: number =
      (event.clientY - canvasHeightRef.current / 2) /
      (canvasHeightRef.current / 2);

    parallaxOffsetXRef.current = -mouseNormX * config.maxParallaxOffset;
    parallaxOffsetYRef.current =
      -mouseNormY * config.maxParallaxOffset * config.yParallaxFactor;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Set effective particle count based on device type
      effectiveMaxParticlesRef.current = isTouch
        ? config.mobileMaxParticles
        : config.desktopMaxParticles;

      resizeCanvas();
      animate();

      // Only add mouse parallax for non-touch devices
      if (!isTouch) {
        window.addEventListener("mousemove", handleMouseMove);
      }
      window.addEventListener("resize", resizeCanvas);

      return () => {
        if (!isTouch) {
          window.removeEventListener("mousemove", handleMouseMove);
        }
        window.removeEventListener("resize", resizeCanvas);
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
      };
    }
  }, [animate, handleMouseMove, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default FloatingRunesAnimation;
