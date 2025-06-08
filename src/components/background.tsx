import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Using "tsparticles" package for loadFull

const FONT_NAME = "Elder Magic";
const PARTICLE_CHARS = ["5", "O", "P", "H", "I", "E"]; // five looks better than S in this font
const PARTICLE_COLOR = "#FF00FF"; // Magenta

const getParticleOptions = (isMobile: boolean): ISourceOptions => ({
  fullScreen: false,
  particles: {
    number: {
      value: 1,
      density: {
        enable: true,
        width: 100,
        height: 200
      }
    },
    color: {
      value: PARTICLE_COLOR
    },
    opacity: {
      value: { min: 0.6, max: 0.95 },
      animation: {
        enable: true,
        speed: 0.2,
        mode: "decrease"
      }
    },
    size: {
      value: isMobile ? { min: 12, max: 20 } : { min: 16, max: 26 },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: { min: 0.8, max: 1 },
      direction: "top",
      warp: true, // Enable particles to warp from one edge to another
      straight: true,
      outModes: {
        default: "out", // Particles leaving the canvas reappear on the other side
        top: "out"
      }
    },
    shape: {
      type: "char",
      options: {
        char: {
          value: PARTICLE_CHARS,
          font: FONT_NAME,
          style: "",
          weight: "400",
          fill: true
        }
      }
    },
    shadow: {
      blur: 10,
      color: {
        value: PARTICLE_COLOR
      },
      offset: {
        x: 0,
        y: 0
      }
    },
    wobble: {
      distance: 5,
      enable: true,
      speed: {
        angle: 1,
        move: 2.5
      }
    },
    stroke: {
      width: 1,
      color: {
        value: PARTICLE_COLOR,
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: !isMobile,
        parallax: {
          enable: true,
          force: 600,
          smooth: 150
        }
      }
    }
  },
  detectRetina: true
});

const TsParticlesAnimation: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    if (!init) return undefined;
    return getParticleOptions(isMobile);
  }, [init, isMobile]);

  if (!init || !options) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="z-0 absolute inset-0 top-1/4"
    />
  );
};

export default TsParticlesAnimation;
